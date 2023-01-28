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

exports.deletetodo = async function(req, res, next) {
    try {
        const tododata =await todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message : "todo deleted successfully",
            statusbar : "success",
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            statusbar : "Failed to fetched todo"
        })
    }
}