const todo = require("../models/todo.model");

exports.addtodo = async function(req, res, next) {
    try {
        req.body["userId"] = req.userId
        const tododata = new todo(req.body)
        await tododata.save()
        res.status(200).json({
            message : "todo added successfully",
            status : "success"
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            status : "Failed to create todo"
        })
    }
}

exports.gettodo = async function(req, res, next) {
    try {
        const tododata =await todo.find({userId : req.userId})
        res.status(200).json({
            message : "todo fetched successfully",
            status : "success",
            data : tododata
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            status : "Failed to fetched todo"
        })
    }
}

exports.getTodoByCategoryId = async function(req, res, next) {
    try {
        const tododata =await todo.find({categoryId : req.params.categoryId})
        res.status(200).json({
            message : "todo fetched successfully",
            status : "success",
            data : tododata
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            status : "Failed to fetched todo"
        })
    }
}

exports.deletetodo = async function(req, res, next) {
    try {
        const tododata =await todo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message : "todo deleted successfully",
            status : "success",
        })
    } catch (error) {
        res.status(401).json({
            message : "Error Deleteing",
            status : "Failed"
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
            status : "success",
            isCompleted : getUpdatedTodo.isCompleted
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            status : "Failed to fetched todo"
        })
    }
}