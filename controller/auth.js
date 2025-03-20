const User = require("../models/user");
const { createToken } = require("../utils/jwt");
const { hashPassword, comparePassword } = require("../utils/hash");

exports.register = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  //Validation
  if (!username || !email || !password) {
    return res.status(400).json({
      message: false,
      error: "Please fill all the fields.",
    });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    console.log("existingUser", existingUser);
    //Check if the user already exists
    if (existingUser) {
      return res.status(400).json({
        message: false,
        error: "User Already Exists..",
      });
    }
    //Hash the password
    const hashedPassword = await hashPassword(password);
    //Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    //Save the user to the database
    const savedUser = await newUser.save();
    console.log("savedUser", savedUser);
    return res.status(201).json({
      message: "User Registered Successfully",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: false,
      error: "Internal Server Error",
    });
  }
};

//Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  //Validation
  if (!email || !password) {
    res.status(400).json({
      message: "Email and Password are required",
    });
  }

  try {
    //Check if the user exists
    const user = await User.findOne({ email });
    console.log("UserDB", user);
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }

    //Check if the password is correct
    const isMatch = await comparePassword(password, user.password);
    console.log("Password_Match", isMatch);
    if (!isMatch) {
      res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    //Create a token
    const token = createToken(user);
    console.log(token);
    res.status(200).json({
      message: "User logged in successfully",
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
