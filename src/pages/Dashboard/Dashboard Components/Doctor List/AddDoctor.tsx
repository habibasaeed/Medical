import React, { useState } from "react";
import { apiFetch } from "../../../../utils/api";

export default function AddDoctor({ onAdded }: { onAdded?: () => void }) {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    email: "",
    phone: "",
    password: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiFetch("/api/admin/doctors/add", {
        method: "POST",
        body: JSON.stringify(form),
      });

      alert("Doctor Added Successfully");
      setForm({
        name: "",
        specialization: "",
        email: "",
        phone: "",
        password: "",
      });
      onAdded?.();
    } catch (err) {
      console.error("Error adding doctor:", err);

      const error = err as { data?: { message?: string } };

      alert(error.data?.message || "Failed to add");
    }
  };

  return (
    <div>
      <h3>Add Doctor</h3>
      <form onSubmit={submit} className="add-form">
        <input
          required
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          required
          placeholder="Specialization"
          value={form.specialization}
          onChange={(e) => setForm({ ...form, specialization: e.target.value })}
        />

        <input
          required
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          required
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          required
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}
