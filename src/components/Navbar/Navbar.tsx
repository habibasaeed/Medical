
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/fonts.css";
import "../../assets/css/all.min.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      {/* start nav */}
      <section className="nav-section">
        <div className="top-nav">
          <div className="container">
            <div className="info">
              <a href="#">
                <i className="fa-solid fa-envelope"></i> info@gmail.com
              </a>
              <a href="#">
                <i className="fa-solid fa-location-dot"></i> 123 St, City,
                Country
              </a>
            </div>
            <div className="social-icon">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <img src="src/assets/images/logo.svg" alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main"
              aria-controls="main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="main">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link p-2 p-lg-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-2 p-lg-3" to="/about-Section">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-2 p-lg-3" to="/service-details">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-2 p-lg-3" to="/blog">
                    Blog
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className=" dropdown-menu nav-item">
                    <li>
                      <Link className="dropdown-item " to="/doctor-profile">
                        Doctor Details
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link className="dropdown-item" to="/timetable">
                        Timetable
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/error">
                        Error 404
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-2 p-lg-3" to="/appointments">
                    Appointments
                  </Link>
                </li>
              </ul>
              <div className="search ps-3 pe-3 d-none d-lg-block">
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
                 <Link className="btn rounded-pill main-btn" to="/contact">
                Contact Now
              </Link>
              {/*<Link
                className="btn rounded-pill main-btn signup-btn ms-2 darc "
                to="/login"
              >
                Sign Up
              </Link>*/}
              {user ? (
                <>
                  {/* Profile Icon */}
                  <Link
                    className="btn rounded-pill main-btn signup-btn ms-2"
                    to={
                      user.role === "admin"
                        ? "/admin/dashboard"
                        : user.role === "doctor"
                        ? "/doctor/dashboard"
                        : "/user/profile"
                    }
                  >
                    <i className="fa-solid fa-user"></i> {user.username}
                  </Link>

                  {/* Logout Button */}
                  <button
                    className="btn rounded-pill main-btn ms-2"
                    onClick={logout}
                    style={{ backgroundColor: "#002261", border: "none" }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {/* If Not Logged In */}
                  <Link
                    className="btn rounded-pill main-btn signup-btn ms-2"
                    to="/login"
                  >
                    Sign in
                  </Link>
                </>
              )}

              <form className="d-lg-none d-md-flex" role="search">
                <input
                  className="form-control ms-2 m-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline m-1" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
      {/* End nav */}
    </>
  );
}

export default Navbar;