const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    "itemname": {
        type: String,
        required: true
    },
    "quantity": {
        type: String,
        required: true
    },
    "rate": {
        type: String,
        required: true
    }
});

const Item = module.exports = mongoose.model('Item', itemSchema);