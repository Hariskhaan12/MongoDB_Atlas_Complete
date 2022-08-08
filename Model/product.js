const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//define the Schema 
const ProductSchema = new Schema({
  title: {
    required: true,
    type: "String",
  },
  Description: {
    required: true,
    type: "String",
  },
  Price: {
    required: true,
    type: "Number",
  },
  rating: {
    required: false,
    type: "Number",
  },
});



//define the Model
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
