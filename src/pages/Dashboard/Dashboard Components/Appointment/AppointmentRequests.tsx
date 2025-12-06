import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../../utils/api";
import "../../../../assets/css/style.css";
import "../../Admin Dashboard/Dashboard.css";

type Appointment = {
  _id: string;
  user: { username: string; email: string };
  doctor: { name?: string; specialization?: string } | string;
  date: string;
  time: string;
  status: string;
};

export default function AppointmentRequests() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiFetch("/api/admin/appointments");
      setAppointments(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    try {
      await apiFetch(`/api/appointments/status/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      setAppointments((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  return (
    <>
      <div className=" container grid-split">
        <div className="container card appointment-section">
          <div className="section-header">
            <h2>Appointment Request</h2>
          </div>
          {loading ? (
            <p>Loading…</p>
          ) : (
            <ul className="appointment-list">
              {appointments.length === 0 ? (
                <li>No appointments found</li>
              ) : (
                appointments.map((app) => (
                  <li key={app._id}>
                    <div className="user-info">
                      <div>
                        <h4>
                          {app.user?.username || app.user?.email || "Unknown"}
                        </h4>
                        <span>
                          📅 {app.date} ⏰ {app.time}
                        </span>
                      </div>
                    </div>
                    <span className={`dept-badge ${app.status}`}>
                      {app.status}
                    </span>
                    <div className="actions">
                      <button
                        className="btn-circle reject"
                        onClick={() => updateStatus(app._id, "rejected")}
                      >
                        ✖
                      </button>
                      <button
                        className="btn-circle approve"
                        onClick={() => updateStatus(app._id, "approved")}
                      >
                        ✔
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          )}
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
    </>
  );
}
