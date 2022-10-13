//User
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//create token
const createToken = (_id) => {
  const signature = jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
  return signature;
};

//login user
const loginUser = async (req, res) => {
  res.json({ mssg: "Login User" });
};

//sign up user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    //const token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
