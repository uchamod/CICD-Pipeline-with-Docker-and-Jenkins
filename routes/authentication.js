const express = require("express");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user_model");

require("dotenv").config();

//register new user
authRoutes.post("/register", async (request, response) => {
  //get user details
  const { name, email, password } = request.body;

  //config details
  if (!name || !email || !password) {
    return response
      .status(400)
      .json({ head: "please enter all details requied" });
  }

  try {
    const exisUser = await User.findOne({ email });
    if (exisUser) {
      return response.status(400).json({ head: " user already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    //create and save new user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    const createdUser = await newUser.save();
    return response
      .status(200)
      .json({ response: "user registerd succsussfuly" });
  } catch (err) {
    return response.status(404).json({ response: `${err}` });
  }
});

//login user
authRoutes.post("/login", async (request, response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response
      .status(400)
      .json({ head: "please enter all details requied" });
  }

  try {
    //verify individual login credientials
    const exisUser = await User.findOne({ email });
    if (!exisUser) {
      return response.status(400).json({ head: " user not found" });
    }

    const isValidPassword = await bcrypt.compare(password, exisUser.password);
    if (!isValidPassword) {
      return response.status(400).json({ head: "invalid password" });
    }
    //gen token
    const genToken = await jwt.sign(
      { id: exisUser._id },
      process.env.JWT_SECRET_CODE,
      { expiresIn: "1h" }
    );
    //deliver response
    response.json({
      genToken,
      user: {
        name: exisUser.name,
        email: exisUser.email,
        id: exisUser._id,
      },
    });
  } catch (err) {
    return response.status(404).json({ response: err });
  }
});

module.exports = authRoutes;
