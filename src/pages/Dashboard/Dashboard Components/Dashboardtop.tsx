import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../utils/api";
import "../../Dashboard/Admin Dashboard/Dashboard.css";
import "../../../assets/css/style.css";

export default function DashboardTop() {
  const [usersCount, setUsersCount] = useState<number | null>(null);
  const [doctorsCount, setDoctorsCount] = useState<number | null>(null);
  const [appointmentsCount, setAppointmentsCount] = useState<number | null>(
    null
  );

  useEffect(() => {
    (async () => {
      try {
        const users = await apiFetch("/api/admin/users");
        setUsersCount(users.length);
        const doctors = await apiFetch("/api/admin/doctors");
        setDoctorsCount(doctors.length);
        const appointments = await apiFetch("/api/admin/appointments");
        setAppointmentsCount(appointments.length);
      } catch (err) {
        console.error("Stats fetch error", err);
      }
    })();
  }, []);

  return (
    <div className="container mt-5 ">
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome, Admin</h1>
        </div>
        {/*   <div className="date-picker">
          <i className="fa-regular fa-calendar"></i> 27 Nov 25 - 27 Nov 25
        </div>*/}
      </div>
      <div className="grid-4">
        <div className="card stat-card blue-theme">
          <div className="card-top">
            <div className="icon-wrap">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="info">
              <span>Patients</span>
              <h3>{usersCount ?? "—"}</h3>
            </div>
            <div className="wave-bg">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path
                  d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  style={{ stroke: "none", fill: "rgba(46, 166, 247, 0.2)" }}
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="card stat-card orange-theme">
          <div className="card-top">
            <div className="icon-wrap">
              <i className="fa-solid fa-calendar-check"></i>
            </div>
            <div className="info">
              <span>Appointments</span>
              <h3>{appointmentsCount ?? "—"}</h3>
            </div>
            <div className="wave-bg">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path
                  d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  style={{ stroke: "none", fill: "rgba(255, 107, 107, 0.2)" }}
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="card stat-card purple-theme">
          <div className="card-top">
            <div className="icon-wrap">
              <i className="fa-solid fa-stethoscope"></i>
            </div>
            <div className="info">
              <span>Doctors</span>
              <h3>{doctorsCount ?? "—"}</h3>
            </div>
            <div className="wave-bg">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path
                  d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  style={{ stroke: "none", fill: "rgba(111, 66, 193, 0.2)" }}
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
