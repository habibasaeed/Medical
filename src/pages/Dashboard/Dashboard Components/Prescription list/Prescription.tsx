import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../../utils/api";
import "../../../../assets/css/style.css";

export default function AdminPrescriptions() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch("/api/admin/prescriptions");
        setList(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Prescriptions</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Appointment</th>
            <th>Notes</th>
            <th>File</th>
          </tr>
        </thead>

        <tbody>
          {list.map((p, index) => (
            <tr key={p._id}>
              <td>{index + 1}</td>
              <td>{p.user?.username}</td>
              <td>
                Dr. {p.doctor?.name} <br />
                <small>{p.doctor?.specialization}</small>
              </td>
              <td>
                {p.appointment?.date} <br />
                {p.appointment?.time}
              </td>
              <td>{p.notes || "No notes"}</td>
              <td>
                <a
                  href={`http://localhost:5000/uploads/${p.file}`}
                  target="_blank"
                  className="btn btn-sm btn-primary"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
