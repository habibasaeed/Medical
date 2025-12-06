import React from "react";
import DashboardTop from "../Dashboard Components/Dashboardtop";
import AppointmentRequests from "../Dashboard Components/Appointment/AppointmentRequests";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import "../../../assets/css/style.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <DashboardTop />

      <div className="grid-2 mt-5">
        <div>
          <AppointmentRequests />
        </div>
      </div>

      <div className="grid-4 container">
        {/* Patients */}
        <div
          className="card nav-card"
          onClick={() => navigate("/admin/patients")}
        >
          <i
            className="fa-solid fa-users"
            style={{ color: "var(--brand)" }}
          ></i>
          <span>All Patients</span>
        </div>

        {/* Doctors */}
        <div className="card nav-card" onClick={() => navigate("/add-doctor")}>
          <i
            className="fa-solid fa-user-doctor"
            style={{ color: "#28a745" }}
          ></i>
          <span>Doctors</span>
        </div>

        {/* Prescriptions */}
        <div
          className="card nav-card"
          onClick={() => navigate("/admin/prescriptions")}
        >
          <i
            className="fa-solid fa-prescription"
            style={{ color: "#dc3545" }}
          ></i>
          <span>Prescriptions</span>
        </div>

        {/* Appointments */}
        <div
          className="card nav-card"
          onClick={() => navigate("/admin/appointments")}
        >
          <i
            className="fa-solid fa-briefcase-medical"
            style={{ color: "#6f42c1" }}
          ></i>
          <span>Appointments</span>
        </div>
      </div>
    </>
  );
}
