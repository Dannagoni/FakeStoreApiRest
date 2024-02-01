const express = require('express');
const productRouter = express.Router();
const { postProduct, getAllProducts, getProductById, updateProduct, deleteProduct, getProductByName,  } = require('../controllers/productsController');

productRouter.post('/products', postProduct);
productRouter.get('/products', getAllProducts);
productRouter.get('/products/:id', getProductById);
productRouter.get('/products', getProductByName);
productRouter.put('/products', updateProduct)
productRouter.delete('/products/:id', deleteProduct)


module.exports = productRouter;
