const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,  // Automatically generate an _id if not provided
  },
  name: {
    type: String,
    required: true,  // Product name is required
    trim: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0  // Stock cannot be negative
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],  // Limiting size to certain values
    required: true
  },
  photo: {
    type: String,  // Store the file path or URL to the uploaded photo
    required: true
  }
}, {
  timestamps: true  // Automatically add createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
