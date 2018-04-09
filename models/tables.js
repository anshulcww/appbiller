const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    "tablename": {
        type: String,
        required: true
    }
});

const Table = module.exports = mongoose.model('Table', tableSchema);
