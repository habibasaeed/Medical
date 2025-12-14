const Prescription = require("../models/Prescription");
const Appointment = require("../models/Appointment");

// ------------------- DOCTOR: Upload Prescription -------------------
const uploadPrescription = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "File is required" });

    const { appointmentId, notes } = req.body;

    const appointment = await Appointment.findById(appointmentId);
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    const prescription = await Prescription.create({
      appointment: appointment._id,
      doctor: appointment.doctor,
      user: appointment.user,
      file: req.file.filename,
      notes: notes || "",
    });

    res.json({
      message: "Prescription uploaded successfully",
      prescription,
    });
  } catch (err) {
    console.error("UPLOAD PRESCRIPTION ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- USER: GET My Prescriptions -------------------
const getMyPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({
      user: req.user.id,
    })
      .populate("doctor", "name specialization email phone")
      .populate("appointment", "date time");

    res.json(prescriptions);
  } catch (err) {
    console.error("GET MY PRESCRIPTIONS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ------------------- DOCTOR: Get Prescriptions He Created -------------------
const getDoctorPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({
      doctor: req.user.id,
    })
      .populate("user", "username email phone")
      .populate("appointment", "date time");

    res.json(prescriptions);
  } catch (err) {
    console.error("GET DOCTOR PRESCRIPTIONS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  uploadPrescription,
  getMyPrescriptions,
  getDoctorPrescriptions,
};
