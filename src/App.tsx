import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Blog from "./pages/Blog/Blog";
import Appointment from "./pages/Appointments/Appointments";
import DoctorProfile from "./pages/Doctor/doctor";
import AboutSection from "./pages/About/about";
import Timetable from "./pages/timetable/timetable";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import AdminDashboard from "./pages/Dashboard/Admin Dashboard/AdminDashboard";
import PatientsList from "./pages/Dashboard/Dashboard Components/Patient List/PatientList";
import DoctorsPage from "./pages/Dashboard/Dashboard Components/Doctor List/DoctorsPage";
import AdminPrescriptions from "./pages/Dashboard/Dashboard Components/Prescription list/Prescription";
import AuthHandler from "./AuthHandler";
import DoctorDashboard from "./pages/Dashboard/Doctor Dashboard/DoctorDashboard";
import AdminAppointments from "./pages/Dashboard/Dashboard Components/Appointment/AdminAppointments";
import ContactUs from "./pages/ContactUs/ContactUs";
import ScrollToTop from "./components/ScrollPageUp";
import { useEffect, useState } from "react";
import ScrollToTopButton from "./components/ScrollUp/ScrollToTop";
import { ToastContainer } from "react-toastify";
function App() {
  const location = useLocation();
  const [authChanged, setAuthChanged] = useState(0);

  useEffect(() => {
    window.addEventListener("auth-update", () => setAuthChanged((v) => v + 1));
  }, []);

  return (
    <>
      {!location.pathname.toLowerCase().includes("login") && <Navbar />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home key={authChanged} />} />
        <Route path="/auth" element={<AuthHandler />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/about-section" element={<AboutSection />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/user/profile" element={<Profile />} />

        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/add-doctor" element={<DoctorsPage />} />
        <Route path="/admin/patients" element={<PatientsList />} />
        <Route path="/admin/prescriptions" element={<AdminPrescriptions />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
      </Routes>
      <ScrollToTopButton />
      <ToastContainer />
      {!location.pathname.toLowerCase().includes("login") && <Footer />}
    </>
  );
}

export default App;
