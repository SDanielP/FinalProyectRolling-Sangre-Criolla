const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
    size: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = sizeSchema;