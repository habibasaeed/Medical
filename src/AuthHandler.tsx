import { useEffect } from "react";

const AuthHandler = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!user || !user.role) {
      window.location.href = "/login";
      return;
    }

    if (user.role === "admin") {
      window.location.href = "/admin/dashboard";
    } else if (user.role === "doctor") {
      window.location.href = "/doctor/dashboard";
    } else {
      window.location.href = "/user/profile";
    }
  }, []);

  return null;
};

export default AuthHandler;
