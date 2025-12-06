import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../../utils/api";
import "../../../../assets/css/style.css";
import "./AddAppointments.css";

type Appointment = {
  _id: string;
  user: { username?: string; email?: string; phone?: string } | string;
  doctor: { name?: string; specialization?: string } | string;
  date: string;
  time: string;
  status: string;
  createdAt?: string;
};

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  // Update status (approve / reject) — then remove from list
  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    if (!confirm(`Are you sure you want to mark this appointment "${status}"?`))
      return;

    try {
      await apiFetch(`/api/appointments/status/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      // remove from list after action
      setAppointments((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  return (
    <div className="admin-apps container">
      <div className="header">
        <h2>All Appointments</h2>
        <p className="muted">{appointments.length} appointments</p>
      </div>

      {loading ? (
        <div className="loading">Loading …</div>
      ) : appointments.length === 0 ? (
        <div className="empty">No appointments found</div>
      ) : (
        <div className="apps-table-wrap">
          <table className="apps-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Created</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((app) => (
                <tr key={app._id}>
                  <td>
                    <div className="cell-user">
                      <div className="user-name">
                        {typeof app.user === "string"
                          ? app.user
                          : app.user?.username || app.user?.email}
                      </div>
                      <div className="user-phone">
                        {typeof app.user === "string" ? "" : app.user?.phone}
                      </div>
                    </div>
                  </td>
                  <td>
                    {typeof app.doctor === "string"
                      ? app.doctor
                      : `${app.doctor?.name || "—"} ${
                          app.doctor?.specialization
                            ? `— ${app.doctor.specialization}`
                            : ""
                        }`}
                  </td>
                  <td>{app.date}</td>
                  <td>{app.time}</td>
                  <td>
                    {app.createdAt
                      ? new Date(app.createdAt).toLocaleString()
                      : "-"}
                  </td>
                  <td>
                    <span className={`status-badge ${app.status}`}>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
