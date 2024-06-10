const mongoose = require('mongoose');
// const Color = require('./colorPModel');
// const Category = require('./categoryPModel');
// const Size = require('./sizePModel');

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
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: Color,
       required: true
    },
    size: {
        type: Number,
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: Size,
       required: true
    },
    category: {
         type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: Category,
        required: true
    },
    // subcategory: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: subcategory
    // },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;