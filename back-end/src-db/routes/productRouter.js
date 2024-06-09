const express = require('express');
const router = express.Router();
const Product = require('../models/productModel/productModel');
const { getProductById } = require('../middlewares/productMiddleware');

// Obtener todos los productos
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear un nuevo producto
router.post('/products', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        stock: req.body.stock,
        imageUrl: req.body.imageUrl
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obtener un producto por ID
router.get('/products/:id', getProductById, (req, res) => {
    res.json(res.product);
});

// Actualizar un producto
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

// Eliminar un producto
router.delete('/products/:id', getProductById, async (req, res) => {
    try {
        await res.product.remove();
        res.json({ message: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;