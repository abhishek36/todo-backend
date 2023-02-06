const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    isCompleted : {
        type : Boolean,
        default : false
    },
    userId :{
        type : mongoose.Types.ObjectId,
        ref : "User"
    },
    categoryId :{
        type : mongoose.Types.ObjectId,
        ref : "Category"
    }
});

module.exports = mongoose.model('todo',todoSchema);