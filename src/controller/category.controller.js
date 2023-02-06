const Category = require("../models/category.model");

exports.addCategory = async function(req, res, next) {
    try {
        req.body["userId"] = req.userId
        const categorydata = new Category(req.body)
        await categorydata.save()
        res.status(200).json({
            message : "Category added successfully",
            status : "success"
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            status : "Failed to create Category"
        })
    }
}

exports.getCategory = async function(req, res, next) {
    try {
        const categorydata =await Category.find({userId : req.userId})
        res.status(200).json({
            message : "Category fetched successfully",
            status : "success",
            data : categorydata
        })
    } catch (error) {
        res.status(401).json({
            message : "Error creating",
            status : "Failed to fetched Category"
        })
    }
}

exports.updateCategory = async function(req, res, next) {
    try {
       await Category.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            message : "Category Updated successfully",
            status : "success",
        })
    } catch (error) {
        res.status(401).json({
            message : "Failed to Update Category",
            status : "Failed"
        })
    }
}

exports.deleteCategory = async function(req, res, next) {
    try {
       await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message : "Category deleted successfully",
            status : "success",
        })
    } catch (error) {
        res.status(401).json({
            message : "Failed to delete Category",
            status : "Failed"
        })
    }
}