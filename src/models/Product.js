import mongoose from "mongoose";
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("product", ProductSchema);
