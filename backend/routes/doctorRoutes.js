const express = require("express");
const router = express.Router();

const { getAllPublicDoctors } = require("../controllers/doctorController");
const {
  getDoctorAppointments,
  uploadPrescription,
} = require("../controllers/appointmentController.js");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const upload = require("../utils/upload");

// Doctor get appointments
router.get("/appointments", auth, role(["doctor"]), getDoctorAppointments);
//All Public Doctors
router.get("/list", getAllPublicDoctors);

// Doctor upload prescription
router.post(
  "/prescriptions/upload",
  auth,
  role(["doctor"]),
  upload.single("file"),
  uploadPrescription
);

// Public route (no token)
router.get("/public", getAllPublicDoctors);

module.exports = router;
