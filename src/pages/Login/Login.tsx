import React, { useState } from "react";
import LoginSignup from "../../assets/images/login_signup.jpeg";
import Logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import "./LoginResponsive.css";

interface FormData {
  username: string;
  email: string;
  phone: string;
  age: string;
  password: string;
  confirmPassword?: string;
}

const Login: React.FC = () => {
  const [action, setAction] = useState<"Sign Up" | "Login">("Login");

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // always string = no uncontrolled warning
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (action === "Login") {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          alert(data.message || "Login failed");
          return;
        }

        // save user + token
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful!");
        window.location.href = "/auth";
      } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong");
      }
    }

    if (action === "Sign Up") {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: formData.username,
              email: formData.email,
              phone: formData.phone,
              age: Number(formData.age),
              password: formData.password,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          alert(data.message || "Signup failed");
          return;
        }

        alert("Account created! Please login.");
        setAction("Login");
      } catch (error) {
        console.error("Signup error:", error);
        alert("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className="w-100 min-vh-100 d-flex align-items-start">
        <div className="position-relative w-50 h-100 d-flex flex-column left-image-section">
          <div className="position-absolute d-flex flex-column image-description text-center">
            <h2 className="fw-bold">Your Wellness Journey Starts Here!</h2>
            {/* <p>Best Medical Healthcare For You.</p> */}
          </div>
          <img
            src={LoginSignup}
            alt="login-signUp-image"
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        <div className="logo">
          <img src={Logo} alt="logo" />

          <div className="card  mt-2 l-s-card">
            <div className="card-body">
              <h5 className="card-title fw-bold">{action}</h5>
              {action === "Login" ? (
                <div></div>
              ) : (
                <h6 className="card-subtitle mb-1 text-body-secondary">
                  Welcome! Please enter your details.
                </h6>
              )}
              {action === "Sign Up" ? (
                <div></div>
              ) : (
                <h6 className="card-subtitle mb-1 text-body-secondary">
                  Welcome back! Please enter your details.
                </h6>
              )}

              <form onSubmit={handleSubmit}>
                <div className="input-list pt-4">
                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div className="input">
                      <FontAwesomeIcon icon={faUser} className="input-icon" />
                      <input
                        type="text"
                        placeholder="Please enter your username..."
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div className="input">
                      <FontAwesomeIcon icon={faPhone} className="input-icon" />
                      <input
                        type="text"
                        placeholder="Please enter your phone number..."
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div className="input">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="input-icon"
                      />
                      <input
                        type="number"
                        placeholder="Please enter your age..."
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="input">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input
                      type="email"
                      placeholder="Please enter your email..."
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input
                      type="password"
                      placeholder="Please enter your password..."
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div className="input">
                      <FontAwesomeIcon icon={faLock} className="input-icon" />
                      <input
                        type="password"
                        placeholder="Please confirm your password..."
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>

                {action === "Sign Up" ? (
                  <div></div>
                ) : (
                  <div className="f-pass">
                    <a href="#" className="text-hover-right fw-light">
                      Forgot Password?
                    </a>
                  </div>
                )}

                <div className="l-s-btn pt-3">
                  <a href="#">
                    <button type="submit">{action}</button>
                  </a>
                </div>
              </form>

              {action === "Sign Up" ? (
                <div></div>
              ) : (
                <div className="sign-up ">
                  <div
                    onClick={() => {
                      setAction("Sign Up");
                    }}
                  >
                    <p className="text-body-secondary">
                      Don't have an account?
                      <a href="#" className="text-hover-right fw-light">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {action === "Login" ? (
                <div></div>
              ) : (
                <div className="sign-up pt-3">
                  <div
                    onClick={() => {
                      setAction("Login");
                    }}
                  >
                    <p className="text-body-secondary">
                      Already have an account?
                      <a href="#" className="text-hover-right fw-light">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
