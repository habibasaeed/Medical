import { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
const MedicalDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  interface AppointmentItem {
    id: number;
    name: string;
    date: string;
    time: string;
    dept: string;
    deptColor: string;
    img: string;
  }

  const [appointments, setAppointments] = useState<AppointmentItem[]>([
    {
      id: 1,
      name: "Dominic Foster",
      date: "12 Aug 2025",
      time: "11:35 PM",
      dept: "Urology",
      deptColor: "green",
      img: "12",
    },
    {
      id: 2,
      name: "Charlotte Bennett",
      date: "06 Aug 2025",
      time: "09:58 AM",
      dept: "Cardiology",
      deptColor: "blue",
      img: "5",
    },
    {
      id: 3,
      name: "Ethan Sullivan",
      date: "01 Aug 2025",
      time: "12:10 PM",
      dept: "Dermatology",
      deptColor: "teal",
      img: "33",
    },
    {
      id: 4,
      name: "Brianna Thompson",
      date: "26 Jul 2025",
      time: "08:20 AM",
      dept: "ENT Surgery",
      deptColor: "purple",
      img: "41",
    },
    {
      id: 5,
      name: "Braun Tucker",
      date: "23 Jul 2025",
      time: "10:30 AM",
      dept: "Radiology",
      deptColor: "light-blue",
      img: "59",
    },
  ]);

  const handleAction = (id: number, action: string) => {
    if (action === "approve") {
      alert("Appointment Approved successfully!");
    }
    const newList = appointments.filter((item) => item.id !== id);
    setAppointments(newList);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  const filteredAppointments = appointments.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header>
        <div className="container header-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <i
                className="fa-solid fa-xmark"
                onClick={() => setSearchTerm("")}
              ></i>
            </button>
          </div>

          <div className="header-actions">
            <button className="icon-btn" onClick={handleFullscreen}>
              <i className="fa-solid fa-expand"></i>
            </button>
            <button className="icon-btn">
              <i className="fa-regular fa-flag"></i>
            </button>
            <button className="icon-btn">
              <i className="fa-regular fa-bell"></i>
            </button>
            <button className="icon-btn" onClick={toggleDarkMode}>
              <i className="fa-regular fa-moon"></i>
            </button>
            <div className="profile">
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Admin"
                className="dash-admin-avatar"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="welcome-section">
          <div className="welcome-text">
            <h1>Welcome, Admin</h1>
            <p>
              Today you have {appointments.length} visits,{" "}
              <Link to="#" style={{ textDecoration: "underline" }}>
                View Details
              </Link>
            </p>
          </div>
          <div className="date-picker">
            <i className="fa-regular fa-calendar"></i> 27 Nov 25 - 27 Nov 25
          </div>
        </div>

        <div className="grid-4">
          <div className="card stat-card blue-theme">
            <div className="card-top">
              <div className="icon-wrap">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="info">
                <span>Patients</span>
                <h3>108</h3>
              </div>
              <span className="badge success">+20%</span>
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

          <div className="card stat-card orange-theme">
            <div className="card-top">
              <div className="icon-wrap">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <div className="info">
                <span>Appointments</span>
                <h3>{appointments.length + 650}</h3>
              </div>
              <span className="badge danger">-15%</span>
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

          <div className="card stat-card purple-theme">
            <div className="card-top">
              <div className="icon-wrap">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
              <div className="info">
                <span>Doctors</span>
                <h3>565</h3>
              </div>
              <span className="badge success">+18%</span>
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

          <div className="card stat-card pink-theme">
            <div className="card-top">
              <div className="icon-wrap">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="info">
                <span>Transactions</span>
                <h3>$5,523.56</h3>
              </div>
              <span className="badge success">+12%</span>
            </div>
            <div className="wave-bg">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path
                  d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  style={{ stroke: "none", fill: "rgba(232, 62, 140, 0.2)" }}
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid-split">
          <div className="card appointment-section">
            <div className="section-header">
              <h2>Appointment Request</h2>
              <a href="#" className="view-all">
                All Appointments
              </a>
            </div>

            <ul className="appointment-list">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((app) => (
                  <li key={app.id}>
                    <div className="user-info">
                      <img
                        src={`https://i.pravatar.cc/150?img=${app.img}`}
                        alt="User"
                        className="dash-patient-avatar"
                      />
                      <div>
                        <h4>{app.name}</h4>
                        <span>
                          <i className="fa-regular fa-calendar"></i> {app.date}{" "}
                          <i className="fa-regular fa-clock"></i> {app.time}
                        </span>
                      </div>
                    </div>
                    <span className={`dept-badge ${app.deptColor}`}>
                      {app.dept}
                    </span>
                    <div className="actions">
                      <button
                        className="btn-circle reject"
                        onClick={() => handleAction(app.id, "reject")}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <button
                        className="btn-circle approve"
                        onClick={() => handleAction(app.id, "approve")}
                      >
                        <i className="fa-solid fa-check"></i>
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li
                  style={{
                    justifyContent: "center",
                    padding: "20px",
                    color: "#777",
                  }}
                >
                  No appointments found
                </li>
              )}
            </ul>
          </div>

          <div className="card chart-section">
            <div className="section-header">
              <h2>Patients Statistics</h2>
              <a href="#" className="view-all">
                View All
              </a>
            </div>
            <div className="chart-info">
              <strong>Total No of Patients: 480</strong>
              <div className="legend">
                <span className="dot new"></span> New Patients
                <span className="dot old"></span> Old Patients
              </div>
            </div>

            <div className="css-chart">
              <div className="y-axis">
                <span>100</span>
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>
              <div className="bars-container">
                {[
                  { day: "25 May", old: 25, new: 20 },
                  { day: "26 May", old: 30, new: 25 },
                  { day: "27 May", old: 70, new: 15 },
                  { day: "28 May", old: 25, new: 75 },
                  { day: "29 May", old: 20, new: 50 },
                  { day: "30 May", old: 40, new: 25 },
                  { day: "31 May", old: 35, new: 10 },
                ].map((bar, index) => (
                  <div className="bar-group" key={index}>
                    <div className="bar">
                      <div
                        className="val-old"
                        style={{ height: `${bar.old}%` }}
                      ></div>
                      <div
                        className="val-new"
                        style={{ height: `${bar.new}%` }}
                      ></div>
                    </div>
                    <span className="label">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid-6">
          <div className="card nav-card">
            <i
              className="fa-solid fa-users"
              style={{ color: "var(--brand)" }}
            ></i>
            <span>All Patient</span>
          </div>
          <div className="card nav-card">
            <i
              className="fa-solid fa-user-doctor"
              style={{ color: "#28a745" }}
            ></i>
            <span>Doctors</span>
          </div>
          <div className="card nav-card">
            <i className="fa-solid fa-flask" style={{ color: "#ffc107" }}></i>
            <span>Labs Results</span>
          </div>
          <div className="card nav-card">
            <i
              className="fa-solid fa-prescription"
              style={{ color: "#dc3545" }}
            ></i>
            <span>Prescriptions</span>
          </div>
          <div className="card nav-card">
            <i
              className="fa-solid fa-briefcase-medical"
              style={{ color: "#6f42c1" }}
            ></i>
            <span>Visits</span>
          </div>
          <div className="card nav-card">
            <i
              className="fa-regular fa-file-lines"
              style={{ color: "#17a2b8" }}
            ></i>
            <span>Medical Records</span>
          </div>
        </div>
      </main>
      <div style={{ height: "50px" }}></div>
    </>
  );
};

export default MedicalDashboard;
