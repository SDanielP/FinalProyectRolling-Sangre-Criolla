const express = require('express');
const router = express.Router();
const WSubcategory = require('../models/subcategoriesModel/w-subcategoryModel');
const { getWSubcategoryById } = require('../middlewares/subcategoryMiddleware');


// Obt todos los prod
router.get('/subcategories', async (req, res) => {
    try {
        const subcategories = await WSubcategory.find();
        res.json(subcategories);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;