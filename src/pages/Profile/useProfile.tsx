import { useEffect, useState } from "react";

type Doctor = {
  name?: string;
  specialization?: string;
};

export default function useProfile() {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [appointments, setAppointments] = useState<any[]>([]);
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const load = async () => {
      try {
        const appRes = await fetch(
          "http://localhost:5000/api/appointments/my",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const presRes = await fetch(
          "http://localhost:5000/api/prescriptions/my",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        let apps = await appRes.json();
        let pres = await presRes.json();

        // 🔥 حماية من doctor اللي بيرجع string
        apps = apps.map((a: any) => ({
          ...a,
          doctor:
            typeof a.doctor === "string"
              ? { name: "Pending Doctor", specialization: "Pending" }
              : a.doctor,
        }));

        setAppointments(apps);
        setPrescriptions(pres);
      } catch (err) {
        console.error("PROFILE LOAD ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { user, appointments, prescriptions, loading };
}
