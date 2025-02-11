const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your product name!"],
  },
  description: {
    type: String,
    required: [true, "Please enter a description!"],
  },
  category: {
    type: String,
    required: [true, "Please choose a category!"],
  },
  tags: {
    type: String,
    required: [true, "Please your product tags!"],
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, "Please enter the discount price!"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter the quantity in the stock!"],
  },
  images: {
    type: [String],
    required: [true, "Please upload at least one image!"],
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
