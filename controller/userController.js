require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const Secret = process.env.SECRET;

const getUser = async (req, res) => {
  try {
    const result = await userModel.find();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserByIdAdmin = async (req, res) => {
  try {
    if (!req.query.id) {
      res.json({ message: "Please provide an Admin id" });
    }
    const result = await userModel.findById(req.query.id);
    const Allusers = await userModel.find();
    if (result.isAdmin) {
      res.status(200).json({ result, Allusers });
    } else {
      res.status(404).json({ message: "User Is not Admin" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    if (!req.query.id) {
      res.json({ message: "Please provide an id" });
    }
    const result = await userModel.findById(req.query.id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const UpdateUser = async (req, res) => {
  try {
    if (!req.query.id) {
      res.json({ message: "Please provide an id" });
    }
    const data = ({ name, email, password, isAdmin } = req.body);
    const result = await userModel.findByIdAndUpdate(req.query.id, data);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
  getUserByIdAdmin,
  getUserById,
  UpdateUser,
};
