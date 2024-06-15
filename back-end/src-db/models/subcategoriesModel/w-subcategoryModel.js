const mongoose = require('mongoose');

const wSubcategorySchema = new mongoose.Schema({
    subcategories: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const WSubcategory = mongoose.model('wSubcategorySchema', wSubcategorySchema);

module.exports = WSubcategory;