const mongoose = require("mongoose");
const {Schema}=require('mongoose')

//define the Schema
const UserSchema = new Schema({
    Name: {
        type: "String",
        require:true
    },
    // LoginDate: {
    //     type: Date,
    //     require: false,   / /becasue we have timesStamps but also possible
    //     default:Date.now
    // },
    Email: {
        require: true,
        type:"String"
    }

},{timestamps:true});

//define the Model
const User = mongoose.model("user", UserSchema);

module.exports = User;
