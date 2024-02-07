const Product = require("../models/productsModel");
const Categories = require('../models/categoriesModel');

const filterProductsByName = async (req, res) => {
    try {
        const { name } = req.params;
        const productByName = await Product.findOne({ name: name });

        if (!productByName) {
            return res.status(404).json({ error: `The name ${name} not found` });
        }

        res.status(200).json(productByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const filterByCategory = async (req, res) => {
    try {
        const { name } = req.params;
        const categoryByName = await Categories.findOne({ name: name });

        if (!categoryByName) {
            return res.status(404).json({ error: `Category with name ${name} not found` });
        }
        res.status(200).json(categoryByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const filterByprice = async (req,res) => {
    try {
        const { price } = req.params
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice)) {
            return res.status(400).json({ error: 'Invalid price value' });
        }
        const productsPrice = await Product.find({ price: numericPrice } )
        if (!productsPrice || productsPrice.length === 0) {
            return res.status(404).json({ error: `There are no products with the price ${numericPrice}` });
        }
        res.status(200).json(productsPrice)
    } catch (error) {
        res.status(500).json(error)
    }
}

const filterByPriceRange = async (req, res) => {
    try {
        const { minPrice, maxPrice } = req.params;

        const products = await Product.find({ 
            price: { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) }
        });

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    filterProductsByName,
    filterByprice,
    filterByPriceRange,
    filterByCategory,
}