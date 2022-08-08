const { Router } = require('express');
const route = Router();
const { getAllProducts, AddNewProduct, UpdateProduct, DeleteProduct } = require('../Controller/ProductController')


route.get("/", getAllProducts);

// add a Product
route.post("/", AddNewProduct);

// Update A Product

route.patch("/:id", UpdateProduct);

// delete A Product

route.delete("/:id", DeleteProduct);

module.exports=route
