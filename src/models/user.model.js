const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
    },
    role: {
        type : String,
        enum : ['USER', 'ADMIN'],
        default : 'USER'
    }
});

module.exports = mongoose.model('User',UserSchema);