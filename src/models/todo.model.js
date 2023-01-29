const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    isCompleted : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('todo',todoSchema);