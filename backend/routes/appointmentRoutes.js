const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getMyAppointments,
  getDoctorAppointments,
  updateAppointmentStatus,
} = require("../controllers/appointmentController.js");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
// admin update appointment status
router.patch("/status/:id", auth, role(["admin"]), updateAppointmentStatus);

// user creates appointment
router.post("/create", auth, role(["user"]), createAppointment);

// user sees his appointments
router.get("/my", auth, role(["user"]), getMyAppointments);

// doctor sees his appointments
router.get("/doctor", auth, role(["doctor"]), getDoctorAppointments);

module.exports = router;
