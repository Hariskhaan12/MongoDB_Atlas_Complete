const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const Product = require('./Model/product');
// const User = require("./Model/user")


const ProductRoute = require('./Routes/ProductRoute')
const UserRoute=require('./Routes/UserRoute')

const ConnectionString = "mongodb+srv://newUser:pakistan123@cluster0.uhdcz.mongodb.net/ECommerceStore?retryWrites=true&w=majority";

mongoose.connect(ConnectionString)
    .then(() => {
        app.listen(9000, () => {
            console.log("Connected to DB and server is listening on PORT 9000");
        })
    })
    .catch((err) => {
    console.log(err);
    })


app.use(express.json()); // middleware to accept Json Object.


app.get('/', (req, res) =>{
    res.status(200).json({
        success: true,
        msg:"HOME PAGE"
        })
    })

// ALL PRODUCTS ROUTES
app.use("/Products", ProductRoute);


// ALL USER ROUTES

app.use("/Users", UserRoute);
