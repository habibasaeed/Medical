const express = require("express");
const router = express.Router();

const {
  uploadPrescription,
  getMyPrescriptions,
  getDoctorPrescriptions,
} = require("../controllers/prescriptionController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const upload = require("../utils/upload");

// Doctor uploads prescription
router.post(
  "/upload",
  auth,
  role(["doctor"]),
  upload.single("file"),
  uploadPrescription
);

// User gets his prescriptions
router.get("/my", auth, role(["user"]), getMyPrescriptions);

// Doctor views prescriptions he uploaded
router.get("/doctor", auth, role(["doctor"]), getDoctorPrescriptions);

module.exports = router;
