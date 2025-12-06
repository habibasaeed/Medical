import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../../utils/api";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
}

export default function DoctorsList({ refresh }: { refresh: boolean }) {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const loadDoctors = async () => {
    try {
      const data = await apiFetch("/api/admin/doctors");
      setDoctors(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, [refresh]);

  const removeDoctor = async (id: string) => {
    if (!confirm("Delete this doctor?")) return;

    try {
      await apiFetch(`/api/admin/doctors/${id}`, { method: "DELETE" });
      loadDoctors();
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  return (
    <>
      <h3>Doctors List</h3>
      <ul>
        {doctors.map((d) => (
          <li key={d._id} className="doctor-item">
            <div>
              <strong>{d.name}</strong> <small>({d.specialization})</small>
            </div>
            <button className="delete-btn" onClick={() => removeDoctor(d._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
