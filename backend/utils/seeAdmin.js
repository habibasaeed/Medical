const User = require("../models/User");
const bcrypt = require("bcryptjs");

const seedAdmin = async () => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({ role: "admin" });

    if (adminExists) {
      console.log("Admin already exists");
      return;
    }

    // Create default admin
    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await User.create({
      username: "Admin",
      age: 30,
      phone: "01000000000",
      email: "admin@medilo.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Default Admin Created:", admin.email);
  } catch (err) {
    console.error("SEED ADMIN ERROR:", err);
  }
};

module.exports = seedAdmin;
