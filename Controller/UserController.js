
const User = require("../Model/user");


const GetAllUser = (req, res) => {
  User.find()
    .sort({ Name: 1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: "Could not Fetch the data" });
    });
};

const AddUser = (req, res) => {
  let NewUser = new User(req.body);

  NewUser.save()
    .then((result) => {
      res.status(200).json({
        success: true,
        msg: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { GetAllUser, AddUser };