const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getAllDoctors,
  getAllAppointments,
  deleteUser,
  deleteDoctor,
} = require("../controllers/adminController");
const { getAllPrescriptions } = require("../controllers/adminController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// ADMIN ONLY ROUTES
router.get("/users", auth, role(["admin"]), getAllUsers);
router.get("/doctors", auth, role(["admin"]), getAllDoctors);
router.get("/appointments", auth, role(["admin"]), getAllAppointments);
const { addDoctor } = require("../controllers/doctorController");

router.post("/doctors/add", auth, role(["admin"]), addDoctor);

router.delete("/users/:id", auth, role(["admin"]), deleteUser);
router.delete("/doctors/:id", auth, role(["admin"]), deleteDoctor);

router.get("/prescriptions", auth, role(["admin"]), getAllPrescriptions);

module.exports = router;
