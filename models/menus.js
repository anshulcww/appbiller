const mongoose = require('mongoose');

const menuSchema= mongoose.Schema({
    "menuname":{
        type: String,
        required:true
    },
    "quantity":{
        type: String,
        required:true
    },
    "rate":{
        type: String,
        required:true
    }
   
});

const menu = module.exports = mongoose.model('Menu', menuSchema);