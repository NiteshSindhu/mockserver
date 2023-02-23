const express = require("express");
const UserModel = require("../model/user.model");

const userRoutes = express.Router();

const RegiterUser = async (req, res) => {
  const data = req.body;
  try {
    const user = new UserModel(data);
    await user.save();
    res.status(201).send({ message: "Regiter Succesfully" });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

userRoutes.post("/register", RegiterUser);

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email, password });
    if (user.length > 0) res.status(201).send({ message: "Login Succesfully" });
    else res.status(404).send({ message: "not found" });
  } catch (err) {
    res.status(501).send({ message: err });
  }
};

userRoutes.post("/login", LoginUser);

module.exports = userRoutes;
