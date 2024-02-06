const express = require('express');
const filtersRouter = express.Router();
const filterByprice = require('../controllers/filtersController');

filtersRouter.get('/products/price/:price', filterByprice);


module.exports = filtersRouter;
