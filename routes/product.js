
// const express = require('express');
// const Product = require('../models/Product');
// const router = express.Router();

// router.get('/product', async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });

// router.get('/product/:productId', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.productId);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Create product
// router.post('/', async (req, res) => {
//   const newProduct = new Product(req.body);
//   await newProduct.save();
//   res.status(201).json(newProduct);
// });

// // Update product
// router.put('/:id', async (req, res) => {
//   const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedProduct);
// });

// // Delete product
// router.delete('/:id', async (req, res) => {
//   await Product.findByIdAndDelete(req.params.id);
//   res.json({ msg: 'Product deleted' });
// });

// module.exports = router;

const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.get('/product', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/product/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create product
router.post('/product', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update product
router.put('/product/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete product
router.delete('/product/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Product deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
