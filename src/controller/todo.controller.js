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

//only API who will use as toggle true to false or vice versa
exports.updateCompleted = async function(req, res, next) {
    try {
        const getTodo = await todo.findById(req.params.id)
        if(getTodo.isCompleted === true){
            payload = {isCompleted : false}
        }else{
            payload = {isCompleted : true}
        }
        await todo.findByIdAndUpdate(req.params.id,payload)
        const getUpdatedTodo = await todo.findById(req.params.id)
        res.status(200).json({
            message : "todo status updated successfully",
            statusbar : "success",
            isCompleted : getUpdatedTodo.isCompleted
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            statusbar : "Failed to fetched todo"
        })
    }
}