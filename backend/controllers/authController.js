// controllers/authController.js

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ------------------- REGISTER -------------------
const register = async (req, res) => {
  try {
    const { username, age, phone, email, password } = req.body;

    // Validate required fields
    if (!username || !age || !phone || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if phone exists
    const phoneExists = await User.findOne({ phone });
    if (phoneExists)
      return res.status(400).json({ message: "Phone already registered" });

    // Check if email exists
    const emailExists = await User.findOne({ email });
    if (emailExists)
      return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      username,
      age,
      phone,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Response
    res.status(201).json({
      user: {
        id: user._id,
        username: user.username,
        age: user.age,
        phone: user.phone,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- LOGIN -------------------
// ------------------- LOGIN (Universal: user/doctor/admin) -------------------
// ------------------- LOGIN (Universal: user/doctor/admin) -------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // models
    const UserModel = require("../models/User");
    const DoctorModel = require("../models/Doctor");

    // find user OR doctor
    let account =
      (await UserModel.findOne({ email })) ||
      (await DoctorModel.findOne({ email }));

    if (!account)
      return res.status(401).json({ message: "Invalid email or password" });

    // check password
    const isMatch = await account.matchPassword(password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    // token
    const token = jwt.sign(
      { id: account._id, role: account.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      user: {
        id: account._id,
        username: account.username,
        email: account.email,
        phone: account.phone,
        age: account.age,
        role: account.role,
      },
      token,
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- EXPORT -------------------
module.exports = {
  register,
  login,
};
