const mongoose = require('mongoose');

const mSubcategorySchema = new mongoose.Schema({
    subcategories: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const MSubcategory = mongoose.model('mSubcategorySchema', mSubcategorySchema);

module.exports = MSubcategory;