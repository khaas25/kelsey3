var mongoose = require("mongoose");
var productsSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String, required: true }],
});
var Products = new mongoose.model("products", productsSchema);
module.exports = Products;

// import mongoose, create schema, create model, export module)
