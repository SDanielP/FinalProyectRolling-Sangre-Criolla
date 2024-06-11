const mongoose = require('mongoose');
const sizeSchema = require('./sizePModel');
// const calculateTotalStock = require('../../middlewares/stockMiddleware');
// const Color = require('./colorPModel');
// const Category = require('./categoryPModel');

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
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

// productSchema.pre('save', calculateTotalStock);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;