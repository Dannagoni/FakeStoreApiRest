const Product = require("../models/productsModel");
const Categories = require('../models/categoriesModel');

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find().populate('category', 'name image');;
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postProduct = async (req, res) => {
    try {
      const { name, description, price, category, image } = req.body;
  
      let existingCategory = await Categories.findOne({ name: category.name });
      if (!existingCategory) {
        return res.status(404).json({ error: `Category '${category.name}' not found` });
      }

      const savedProduct = await Product.create({
        name,
        description,
        price,
        category: {
            _id: existingCategory._id,
            image: existingCategory.image
          },
        image,
      });
      
        existingCategory.products.push(savedProduct._id);
        await existingCategory.save();
  
      res.status(200).json({
        name: savedProduct.name,
        description: savedProduct.description,
        price: savedProduct.price,
        category: {
          name: existingCategory.name,
          image: existingCategory.image,
        },
        image: savedProduct.image,
        _id: savedProduct._id,
      });
    } catch (error) {
      console.error("Error al crear el producto:", error);
      res.status(500).json({ error: "Error al crear el producto" });
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

const updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, image } = req.body;
        if (!name || !description || !price || !category || !image) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const { id } = req.body;
        const existingCategory = await Categories.findOne({ name: category.name})
        if(!existingCategory)
        return res.status(404).json({message: `Category ${category.name} not found` })
        const existingProduct = await Product.findById(id);
        // Verifica si los valores son iguales utilizando equals de Mongoose
        if (existingProduct && existingProduct.equals({ name, description, price, category: existingCategory, image })) {
            return res.status(200).json({ message: "Product has already been updated", product: existingProduct });
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                description,
                price,
                category: existingCategory,
                image
            },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        existingCategory.products = existingCategory.products.filter(productId => productId.toString() !== id.toString());
        existingCategory.products.push(updatedProduct._id);
        await existingCategory.save();

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
        await Categories.updateMany(
            { },
            { $pull: { products: id } }
        );
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
    deleteProduct,
};

