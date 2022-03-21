require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const Secret = process.env.SECRET;

const Signup = async (req, res) => {
  const { email, password, name, dob, isAdmin } = req.body;
  try {
    const Olduser = await userModel.findOne({ email });
    if (Olduser) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await userModel.create({
      email: email,
      name: name,
      dob: dob,
      password: hashedPassword,
      isAdmin: isAdmin ? true : false,
    });
    const token = jwt.sign({ _id: result._id }, Secret, {
      expiresIn: "4h",
    });
    res
      .status(200)
      .json({ result, token, message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (!existingUser) {
    res.status(404).json({ message: "User Is not Registered Please Signup" });
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );
  if (!isPasswordCorrect) {
    res.status(400).json({ message: "Password Is Not Correct " });
  }
  const token = jwt.sign({ _id: existingUser._id }, Secret, {
    expiresIn: "4h",
  });
  res.status(200).json({ token, message: "User Logged In Successfully" });
};

const UpdatePassword = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  userModel
    .findOneAndUpdate({ email }, { password: hashedPassword })
    .then((result) => {
      res.status(200).json({ message: "Password Updated Successfully" });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  Signup,
  login,
  UpdatePassword,
};
