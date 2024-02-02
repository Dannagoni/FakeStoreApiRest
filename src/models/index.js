const mongoose = require('mongoose');

// Modelo para la relación Producto-Categoría
const relacionCategoriaProductoSchema = new mongoose.Schema({
  idCategoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  idProducto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
});

const RelacionCategoriaProducto = mongoose.model('RelacionCategoriaProducto', relacionCategoriaProductoSchema);

module.exports = {
  RelacionCategoriaProducto,
};
