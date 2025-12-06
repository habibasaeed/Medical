import React, { useEffect, useState } from "react";
import { apiFetch } from "../../../../utils/api";
import "./PatientList.css";

interface User {
  _id: string;
  username: string;
  email: string;
  phone: number;
  age: number;
}
export default function PatientsList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch("/api/admin/users");
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const deleteUser = async (id: string) => {
    if (!confirm("Delete user?")) return;
    try {
      await apiFetch(`/api/admin/users/${id}`, { method: "DELETE" });
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed");
    }
  };

  return (
    <div className="patients-card">
      <h2 className="patients-title">Patients</h2>

      <table className="patients-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, index) => (
            <tr key={u._id}>
              <td>{index + 1}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.age}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(u._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {users.length === 0 && (
            <tr>
              <td colSpan={6} className="empty-row">
                No patients found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
