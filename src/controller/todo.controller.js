const todo = require("../models/todo.model");

exports.addtodo = async function(req, res, next) {
    try {
        const tododata = new todo(req.body)
        await tododata.save()
        res.status(200).json({
            message : "todo added successfully",
            statusbar : "success"
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            statusbar : "Failed to create todo"
        })
    }
}

exports.gettodo = async function(req, res, next) {
    try {
        const tododata =await todo.find()
        res.status(200).json({
            message : "todo fetched successfully",
            statusbar : "success",
            data : tododata
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            statusbar : "Failed to fetched todo"
        })
    }
}


// exports.constructFormulaOfDB = (req, res)=>{
//     let formula = req.body
//     let SchemaName =formula.leftType
//     let condition =`${SchemaName}.find({${formula.leftValue}: '${formula.rightValue}'})`

//     res.status(200).json({
//         message : "todo fetched successfully",
//         statusbar : "success",
//         data : condition
//     })
//   }


//   function constructFormulaOfDB(formula){
//     let SchemaName =formula.leftType
//     let condition =`${SchemaName}.find({${formula.leftValue}: '${formula.rightValue}'})`
//         return condition
// }