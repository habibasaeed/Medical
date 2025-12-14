const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  yearsOfExperience: { type: Number, default: 0 },
  bio: { type: String },
  role: { type: String, default: "doctor" },
  createdAt: { type: Date, default: Date.now },
});

// compare password
DoctorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Doctor", DoctorSchema);
