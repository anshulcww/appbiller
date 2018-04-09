const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  
        "name":{
            type: String,
            required: true
        },
        "number":{
            type: String,
            required:  true
        },
        "email": {
            type: String,
            required: true
        },
        
    
});

const Customer = module.exports =  mongoose.model('Customer', customerSchema);