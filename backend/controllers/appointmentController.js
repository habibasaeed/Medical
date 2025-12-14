const Appointment = require("../models/Appointment");
const Prescription = require("../models/Prescription");

// -----------------------------------------------------
// USER: Create Appointment
// -----------------------------------------------------
const createAppointment = async (req, res) => {
  try {
    const { doctorId, date, time } = req.body;

    if (!doctorId || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const appointment = await Appointment.create({
      user: req.user.id,
      doctor: doctorId,
      date,
      time,
      status: "pending",
    });

    const populated = await Appointment.findById(appointment._id).populate(
      "doctor",
      "name specialization email phone"
    );

    res.json({
      message: "Appointment created",
      appointment: populated,
    });

    res.json({
      message: "Appointment created",
      appointment,
    });
  } catch (err) {
    console.error("CREATE APPOINTMENT ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// -----------------------------------------------------
// USER: Get My Appointments
// -----------------------------------------------------
const getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      user: req.user.id,
    }).populate("doctor", "name email phone specialization");

    res.json(appointments);
  } catch (err) {
    console.error("GET MY APPOINTMENTS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};
//Admin: Update Appointment Status
const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    res.json({ message: "Status updated", appointment });
  } catch (err) {
    console.error("UPDATE STATUS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};
// -----------------------------------------------------
// DOCTOR: Get Doctor Appointments
// -----------------------------------------------------
const getDoctorAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      doctor: req.user.id,
    }).populate("user", "username email phone");

    res.json(appointments);
  } catch (err) {
    console.error("GET DOCTOR APPOINTMENTS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// -----------------------------------------------------
// DOCTOR: Upload Prescription (if needed)
// -----------------------------------------------------
const uploadPrescription = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "File is required" });

    const { appointmentId, notes } = req.body;

    const appointment = await Appointment.findById(appointmentId);
    if (!appointment)
      return res.status(404).json({ message: "Appointment not found" });

    const prescription = await Prescription.create({
      appointment: appointment._id,
      doctor: req.user.id,
      user: appointment.user,
      file: req.file.filename,
      notes: notes || "",
    });

    res.json({
      message: "Prescription uploaded",
      prescription,
    });
  } catch (err) {
    console.error("UPLOAD PRESCRIPTION ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// -----------------------------------------------------
// EXPORT ALL
// -----------------------------------------------------
module.exports = {
  createAppointment,
  getMyAppointments,
  getDoctorAppointments,
  uploadPrescription,
  updateAppointmentStatus,
};
