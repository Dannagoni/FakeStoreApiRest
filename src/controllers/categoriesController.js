const Categories = require('../models/categoriesModel');
const Product = require("../models/productsModel");

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Categories.find();
        res.status(200).json(allCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postCategory = async (req, res) => {
    try {
      const  {id, name, image, products } = req.body;
  
      const newCategory = new Categories({
        id,
        name,
        products: [],
        image,
      });
  
      const savedCategory = await newCategory.save();
  
      res.status(200).json(savedCategory);
    } catch (error) {
      res.status(500).json({ error: "Error to create the category" });
    }
  };

const getCategoryById = async (req, res) => {
    try {
        const {id} = req.params
        const categoryById = await Categories.findById(id)
        if(!categoryById)
        return res.status(404).json({error: `Id ${id} not found` })
        res.status(200).json(categoryById)
     } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getCategoryByName = async (req, res) => {
    try {
        const { name } = req.query;
        if (name.length === 0) {
            return res.status(400).json({ error: 'Name parameter is missing in the query' });
        }
        const categoryByName = await Categories.findOne({ name });
        if (categoryByName.length === 0) {
            return res.status(404).json({ error: `Category with name ${name} not found` });
        }
        res.status(200).json(categoryByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { name, image, products } = req.body;
        if ( !name || !image ||!products) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const { id } = req.body;

        const existingCategory = await Categories.findById(id);
        if (!existingCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const updatedCategory = await Categories.findByIdAndUpdate(
            id,
            {
                name,
                image,
                products
            },
            
            { new: true, runValidators: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: "Category updated successfully", category: updatedCategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCategory = async(req, res) => {
    try {
        const { id } = req.params;
        const productsToUpdate = await Product.find({ 'category': id });
        for (const product of productsToUpdate) {
            product.category = null;
            await product.save();
        }
        const deleteCategory = await Categories.findByIdAndDelete(id);

        if (!deleteCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully", deleteCategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    postCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    getCategoryByName,
    deleteCategory,
};

