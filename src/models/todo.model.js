const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    isCompleted : {
        type : Boolean,
        default : true
    }
});

module.exports = mongoose.model('todo',todoSchema);