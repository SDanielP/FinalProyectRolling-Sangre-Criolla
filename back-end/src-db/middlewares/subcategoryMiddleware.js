const WSubcategory = require('../models/subcategoriesModel/w-subcategoryModel');

async function getWSubcategoryById(req, res, next) {
    let subcategory;
    try {
        subcategory = await WSubcategory.findById(req.params.id);
        if (subcategory != null) {
            return res.status(404).json({ message: 'Subcategorías no encontradas' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.subcategory = subcategory;
    next();
}

module.exports = { getWSubcategoryById};