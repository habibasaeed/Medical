import React from "react";
import useProfile from "./useProfile";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "../../assets/css/style.css";
import "./Profile.css";

type Doctor = {
  name?: string;
  specialization?: string;
};

type Appointment = {
  _id: string;
  date: string;
  time: string;
  status: "pending" | "approved" | "rejected";
  doctor?: Doctor;
};

type Prescription = {
  _id: string;
  doctor?: Doctor;
  file: string;
  appointment?: { date: string; time: string };
  notes?: string;
};

const Profile = () => {
  const { user, appointments, prescriptions, loading } = useProfile();

  if (loading) return <p className="text-center mt-5">Loading profile…</p>;

  return (
    <>
      <BreadCrumbs page="Profile" title="Your Profile" />

      <div className="profile-wrapper container my-5">
        {/* USER INFO */}
        <h3>Your Data</h3>
        <ul className="profile-data">
          <li>Name: {user?.username}</li>
          <li>Email: {user?.email}</li>
          <li>Phone: {user?.phone}</li>
          <li>Age: {user?.age}</li>
        </ul>

        {/* APPOINTMENTS */}
        <h3 className="mt-5">Appointments</h3>

        {appointments.length === 0 && <p>No appointments yet.</p>}

        {appointments.map((a) => {
          const doctor =
            typeof a.doctor === "object" && a.doctor !== null ? a.doctor : null;

          const doctorName =
            doctor?.name ||
            (a.status === "pending"
              ? "Awaiting Confirmation…"
              : "Doctor not assigned");

          const doctorSpec =
            doctor?.specialization ||
            (a.status === "pending" ? "Pending assignment" : "N/A");

          return (
            <div className="visit-card" key={a._id}>
              <h5>{doctorName}</h5>
              <p>{doctorSpec}</p>
              <p>
                {a.date} — {a.time}
              </p>
              <span className={`badge status-${a.status}`}>{a.status}</span>
            </div>
          );
        })}

        {/* PRESCRIPTIONS */}
        <h3 className="mt-5">Prescriptions</h3>

        {prescriptions.length === 0 && <p>No prescriptions yet.</p>}

        {prescriptions.map((p: Prescription) => (
          <div className="prescription-card" key={p._id}>
            <h5>{p.doctor?.name || "Doctor"}</h5>

            <p>
              {p.appointment?.date || "N/A"} — {p.appointment?.time || ""}
            </p>

            <a
              href={`http://localhost:5000/uploads/${p.file}`}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              View Prescription
            </a>
          </div>
        ))}

        {/* LOGOUT */}
        <button
          className="logout-btn mt-4"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Profile;
