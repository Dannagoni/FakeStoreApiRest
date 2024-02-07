const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true, // Asegura que no haya duplicados
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products', 
    }],
});

const Categories = mongoose.model('Categories', categorySchema);

module.exports = Categories;