const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Doctor = require("../models/Doctor");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const token = authHeader.split(" ")[1];

    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check in User table
    let account = await User.findById(decoded.id).select("-password");

    // If not user → check doctor table
    if (!account) {
      account = await Doctor.findById(decoded.id).select("-password");
    }

    // If still not found:
    if (!account) {
      return res.status(401).json({ message: "Account not found" });
    }

    // Attach user info to req
    req.user = {
      id: account._id,
      role: decoded.role, // important!
    };

    next();
  } catch (err) {
    console.error("AUTH ERROR:", err);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
