const Product = require("../models/productsModel");

const postProduct = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      image,
    });

    const savedProduct = await newProduct.save();

    res.status(200).json(savedProduct);
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const {id} = req.params
        const productById = await Product.findById(id)
        if(!productById)
        return res.status(404).json({error: `Id ${id} not found` })
        res.status(200).json(productById)
     } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const getProductByName = async (req, res) => {
    try {
        const { name } = req.query;

        const productByName = await Product.find({ name: { $regex: new RegExp(name, 'i') } });

        if (!productByName || productByName.length === 0) {
            return res.status(404).json({ error: `The name ${name} not found` });
        }

        res.status(200).json(productByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, image } = req.body;
        if (!name || !description || !price || !category || !image) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const { productId } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { name, description, price, category, image },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async(req,res) => {
    try {
        const {id} = req.params
        const deleteProduct = await Product.findByIdAndDelete(id)
        if(!deleteProduct)
        return res.status(404).json("Product not found")
        res.status(200).json({message: "Product deleted successfully",deleteProduct})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    postProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    getProductByName,
    deleteProduct,
};

