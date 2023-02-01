const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jsonwebtoken");

exports.register = async function(req, res, next) {
    try {
        const getUser = await User.findOne({email : req.body.email})
        if(getUser) {
            res.status(202).json({
                message : "User Already registered",
                status : "Failed"
            })
        }else{
            const hash =await bcrypt.hashSync(req.body.password, saltRounds);
            req.body["password"] = hash
            new User(req.body).save()
            res.status(200).json({
                message : "User registered successfully",
                status : "success"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message : "Error creating",
            status : "Failed to register user"
        })
    }
}

exports.login = async function(req, res, next) {
    try {
        const getUser = await User.findOne({email : req.body.email})
        if(!getUser) {
            res.status(200).json({
                message : "User not found",
                status : "success",
            })
        }else{
            const result =await bcrypt.compareSync(req.body.password, getUser.password);
            const token = jwt.sign(
                {
                  userId: getUser._id,
                  email : getUser.email,
                  date: new Date(),
                },
                "ptsprint"
              );
            if(result){
                res.status(200).json({
                    message : "User Logged in successfully",
                    status : "success",
                    data :{ getUser, token}
                })
            }else{
                res.status(200).json({
                    message : "Incorrect Password",
                    status : "Failed",
                })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message : "Error creating",
            status : "Failed to login user"
        })
    }
}