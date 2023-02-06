const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    title : {
        type : String,
    },
    userId :{
        type : mongoose.Types.ObjectId,
        ref : "User"
    }
});

module.exports = mongoose.model('Category',CategorySchema);