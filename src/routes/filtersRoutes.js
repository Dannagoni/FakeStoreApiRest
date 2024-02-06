const express = require('express');
const { filterByPriceRange, filterByprice, filterByCategory, filterProductsByName } = require('../controllers/filtersController');
const filtersRouter = express.Router();

filtersRouter.get('/products/search/:name', filterProductsByName); 
filtersRouter.get('/categories/search/:name', filterByCategory);
filtersRouter.get('/products/price/:price', filterByprice);
filtersRouter.get('/products', filterByPriceRange);


module.exports = filtersRouter;
