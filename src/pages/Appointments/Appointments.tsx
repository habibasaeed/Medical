import React, { useState, useEffect } from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "../../assets/css/style.css";
import "./Appointments.css";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
}

const Appointments: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const token = localStorage.getItem("token");

  // Fetch doctors
  useEffect(() => {
    fetch("http://localhost:5000/api/doctors/public")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data || []);
        const uniqueSpecs = [
          ...new Set(data.map((d: Doctor) => d.specialization)),
        ];
        setCategories(uniqueSpecs);
      })
      .catch((err) => console.error("ERROR FETCHING DOCTORS:", err));
  }, []);

  const filteredDoctors = selectedCategory
    ? doctors.filter((doc) => doc.specialization === selectedCategory)
    : [];

  // Submit appointment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return alert("Please login first");
    if (!selectedCategory) return alert("Choose a category");
    if (!doctorId) return alert("Choose a doctor");

    const response = await fetch(
      "http://localhost:5000/api/appointments/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ doctorId, date, time }),
      }
    );

    const data = await response.json();

    if (!response.ok) return alert(data.message || "Something went wrong");

    alert("Appointment booked!");

    // Reset form
    setSelectedCategory("");
    setDoctorId("");
    setDate("");
    setTime("");

    // Avoid profile crash by redirecting home or profile safely
    setTimeout(() => {
      window.location.href = "/user/profile";
    }, 500);
  };

  return (
    <>
      <BreadCrumbs page="Appointments" title="Appointments" />

      <div className="appointment-container">
        <h3 className="pb-4">Book a New Appointment</h3>

        <form className="form-group" onSubmit={handleSubmit}>
          {/* CATEGORY BLOCKS */}
          <label>Choose a service</label>
          <div className="category-blocks appt-grid-wrapper">
            {categories.map((cat) => (
              <div
                key={cat}
                className={`category-box appt-radio-box ${
                  selectedCategory === cat ? "active-category" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setDoctorId("");
                }}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Doctor Select */}
          <label>Select Doctor</label>
          <select
            className="doctor-form"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            required
            disabled={!selectedCategory}
          >
            <option value="">Choose doctor</option>
            {filteredDoctors.map((doc) => (
              <option key={doc._id} value={doc._id}>
                {doc.name} — {doc.specialization}
              </option>
            ))}
          </select>

          {/* DATE */}
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {/* TIME */}
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </>
  );
};

export default Appointments;
