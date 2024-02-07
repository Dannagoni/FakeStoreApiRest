const express = require('express');
const productRouter = express.Router();
const { postProduct, getAllProducts, getProductById, updateProduct, deleteProduct, getAllProductsByCategory,  } = require('../controllers/productsController');

productRouter.post('/products', postProduct);
productRouter.get('/products', getAllProducts);
productRouter.get('/products/:id', getProductById);
productRouter.put('/products', updateProduct)
productRouter.delete('/products/:id', deleteProduct)
productRouter.get('/products/category/:categoryName', getAllProductsByCategory);

module.exports = productRouter;
