const express = require('express');
const router = express.Router();
const Product = require('../models/productModel/productModel');
const { getProductById } = require('../middlewares/productMiddleware');

// Obt todos los prod
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Obt un prod por ID
router.get('/products/:id', getProductById, (req, res) =>{
    res.json(res.product)
})

// obt por nombre
router.get('/products/:name', getProductById)

// Crear nuevo prod
router.post('/products', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        color: req.body.color,
        size: req.body.size,
        category: req.body.category,
        stock: req.body.stock
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obt prod por ID
router.get('/products/:id', getProductById, (req, res) => {
    res.json(res.product);
});

// Actualiazr prod
router.patch('/products/:id', getProductById, async (req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name;
    }
    if (req.body.price != null) {
        res.product.price = req.body.price;
    }
    if (req.body.description != null) {
        res.product.description = req.body.description;
    }
    if (req.body.color != null) {
        res.product.color = req.body.color;
    }
    if (req.body.size != null) {
        res.product.size = req.body.size;
    }
    if (req.body.category != null) {
        res.product.category = req.body.category;
    }
    if (req.body.stock != null) {
        res.product.stock = req.body.stock;
    }

    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar prod
router.delete('/products/:id', getProductById, async (req, res) => {
    try {
        await res.product.remove();
        res.json({ message: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;