const express = require('express');
const { filterByPriceRange, filterByprice, filterByCategory, filterProductsByName } = require('../controllers/filtersController');
const filtersRouter = express.Router();

filtersRouter.get('/products/search/:name', filterProductsByName); 
filtersRouter.get('/products/price/:price', filterByprice);


module.exports = filtersRouter;
