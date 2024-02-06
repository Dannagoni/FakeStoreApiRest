const express = require('express');
const categoryRouter = express.Router();
const { postCategory, getAllCategories, getCategoryById, getCategoryByName, updateCategory, deleteCategory } = require('../controllers/categoriesController');

categoryRouter.post('/categories', postCategory);
categoryRouter.get('/categories', getAllCategories);
categoryRouter.get('/categories/:id', getCategoryById);
categoryRouter.put('/categories', updateCategory);
categoryRouter.delete('/categories/:id', deleteCategory);



module.exports = categoryRouter;
