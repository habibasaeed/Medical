const User = require("../models/User");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");

// ------------------- GET ALL USERS -------------------
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");
    res.json(users);
  } catch (err) {
    console.error("GET ALL USERS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- GET ALL DOCTORS -------------------
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().select("-password");
    res.json(doctors);
  } catch (err) {
    console.error("GET ALL DOCTORS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- GET ALL APPOINTMENTS -------------------
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("user")
      .populate("doctor");

    res.json(appointments);
  } catch (err) {
    console.error("GET ALL APPOINTMENTS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- DELETE USER -------------------
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted", user });
  } catch (err) {
    console.error("DELETE USER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- DELETE DOCTOR -------------------
const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: "Doctor deleted", doctor });
  } catch (err) {
    console.error("DELETE DOCTOR ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};
// ------------------- GET ALL PRESCRIPTIONS -------------------
const Prescription = require("../models/Prescription");

const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
      .populate("doctor", "name specialization")
      .populate("user", "username email")
      .populate("appointment", "date time");

    res.json(prescriptions);
  } catch (err) {
    console.error("GET ALL PRESCRIPTIONS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllUsers,
  getAllDoctors,
  getAllAppointments,
  deleteUser,
  deleteDoctor,
  getAllPrescriptions,
};
