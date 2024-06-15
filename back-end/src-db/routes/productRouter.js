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

//Obt un prod por ID tiene la verificación en el archivo middleware jiji
router.get('/products/:id', getProductById, (req, res) => {
    res.json(res.product)
})

// obt por nombre
router.get('/products/name/:name', async (req, res) => {
    try {
        const product = await getProductById({ name: req.params.name });
        if (product == null) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}),

// Crear nuevo prod
router.post('/products', async (req, res) => {
    try {
        const productData = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            color: req.body.color,
            size: req.body.size, 
            category: req.body.category,
            subcategory: req.body.subcategory,
            image: req.body.image,
            stock: req.body.stock
        };
// Crear nuevo prod
        const product = new Product(productData);
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: "producto no creado" + err.message });
    }
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
    if (req.body.subcategory != null) {
        res.product.subcategory = req.body.category;
    }
    if (req.body.image != null) {
        res.product.image = req.body.image;
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
      const product = res.product;
      await Product.findByIdAndDelete(product._id);
      return res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
    }
  })

// Crear un nuevo producto


module.exports = router;