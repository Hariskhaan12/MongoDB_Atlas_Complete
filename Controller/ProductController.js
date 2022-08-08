const Product = require("../Model/product");

const getAllProducts = (req, res) => {
  Product.find()
    .sort("1")
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: "Failed", msg: "Could not Fetch the Products Data" });
    });
};

const AddNewProduct= (req,res)=> {
    let NewProduct = new Product(req.body);
        
        NewProduct.save()
          .then((result) => {
            res.status(200).json({
              success: true,
              msg: result,
            });
          })
          .catch((err) => {
            console.log(err);
          });
}

const UpdateProduct = (req, res) => {
  const { id } = req.params;
  Product.updateOne(
    { _id: id },req.body
    // { title: req.body.title, Price: req.body.price }
  )
    .then((result) => {
      res.status(200).json({ success: true, msg: result });
    })
      .catch((err) => {
        // console.log(err);
      res
        .status(500)
        .json({ success: false, msg: "Could Not Update the Product" });
    });
};

const DeleteProduct = (req, res) => {
  const { id } = req.params;
  Product.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json({ success: true, msg: result });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, msg: "Could Not Update the Product" });
    });
};

module.exports = {
  getAllProducts,
  AddNewProduct,
  UpdateProduct,
  DeleteProduct,
};