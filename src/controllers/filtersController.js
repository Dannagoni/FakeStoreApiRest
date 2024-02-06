const Product = require("../models/productsModel");

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
const filterByPriceRange = async (req,res) => {
    try {
        const { minPrice, maxPrice } = req.params
        
        
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = filterByprice