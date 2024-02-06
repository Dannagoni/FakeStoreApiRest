const Product = require("../models/productsModel");

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

module.exports = {
    filterProductsByName,
    filterByprice,
}