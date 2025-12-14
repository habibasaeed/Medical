const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ------------------- ADD DOCTOR (Admin) -------------------
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      specialization,
      email,
      phone,
      password,
      yearsOfExperience,
      bio,
    } = req.body;

    // check email
    const emailExists = await Doctor.findOne({ email });
    if (emailExists)
      return res.status(400).json({ message: "Email already registered" });

    // check phone
    const phoneExists = await Doctor.findOne({ phone });
    if (phoneExists)
      return res.status(400).json({ message: "Phone already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = await Doctor.create({
      name,
      specialization,
      email,
      phone,
      password: hashedPassword,
      yearsOfExperience,
      bio,
      role: "doctor",
    });

    res.status(201).json({ message: "Doctor added successfully", doctor });
  } catch (err) {
    console.error("ADD DOCTOR ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- DOCTOR LOGIN -------------------
const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email });
    if (!doctor)
      return res.status(401).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, doctor.password);
    if (!match)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: doctor._id, role: "doctor" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      doctor: {
        id: doctor._id,
        name: doctor.name,
        specialization: doctor.specialization,
        email: doctor.email,
        phone: doctor.phone,
        yearsOfExperience: doctor.yearsOfExperience,
        bio: doctor.bio,
        role: doctor.role,
      },
      token,
    });
  } catch (err) {
    console.error("DOCTOR LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- PUBLIC DOCTOR LIST -------------------
const getAllPublicDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().select("name specialization _id");
    res.json(doctors);
  } catch (err) {
    console.error("GET PUBLIC DOCTORS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};
exports.getAllPublicDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().select("name specialization");
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ------------------- EXPORT -------------------
module.exports = {
  addDoctor,
  doctorLogin,
  getAllPublicDoctors,
};
