const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    completed : {
        type : Boolean,
        default : true
    }
});

module.exports = mongoose.model('todo',todoSchema);