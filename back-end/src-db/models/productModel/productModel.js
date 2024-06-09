const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
       type: String,
       required: true
    },
    size: {
       type: Number,
       required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;