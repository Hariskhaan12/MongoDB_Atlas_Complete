const {GetAllUser, AddUser}=require('../Controller/UserController')

const { Router } = require('express')
const route = Router();

route.get("/", GetAllUser);


route.post("/", AddUser);

module.exports = route;