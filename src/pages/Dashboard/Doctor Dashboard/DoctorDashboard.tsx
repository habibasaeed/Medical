import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../utils/api";
import "./DoctorDashboard.css";

type Appointment = {
  _id: string;
  user: { username: string; email: string };
  date: string;
  time: string;
  status: string;
};

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // Fetch doctor appointments
  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiFetch("/api/appointments/doctor");
        setAppointments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // Upload prescription handler
  const uploadPrescription = async (
    appointmentId: string,
    file: File,
    notes: string
  ) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("appointmentId", appointmentId);
    formData.append("notes", notes);

    try {
      setUploading(true);
      await apiFetch("/api/prescriptions/upload", {
        method: "POST",
        body: formData,
      });
      alert("Prescription uploaded!");
    } catch (err) {
      alert("Upload failed");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="doctor-dashboard container">
      <h2 className="title">Doctor Dashboard</h2>
      <p className="muted">{appointments.length} upcoming appointments</p>

      {loading ? (
        <p className="loading">Loading…</p>
      ) : (
        <div className="doctor-grid">
          {appointments.map((app) => (
            <div className="app-card" key={app._id}>
              <h4>{app.user.username}</h4>
              <p className="small">{app.user.email}</p>

              <p className="time">
                📅 {app.date} — ⏰ {app.time}
              </p>

              <UploadBox
                appointmentId={app._id}
                onUpload={uploadPrescription}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// -----------------------
// Upload Component
// -----------------------
function UploadBox({
  appointmentId,
  onUpload,
}: {
  appointmentId: string;
  onUpload: (id: string, file: File, notes: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState("");

  const submit = () => {
    if (!file) return alert("Choose a file");
    onUpload(appointmentId, file, notes);
    setFile(null);
    setNotes("");
  };

  return (
    <div className="upload-box">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <textarea
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button className="btn-upload" onClick={submit}>
        Upload Prescription
      </button>
    </div>
  );
}
