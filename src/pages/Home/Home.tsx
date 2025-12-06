import "../../assets/css/bootstrap.min.css";
import "../../assets/css/all.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../App.css";
import Portfolio from "../../components/Portfolio";
import BlogSlider from "../../components/Slider/BlogSlider";
import "../../assets/css/fonts.css";
import TeamSlider from "../../components/Slider/TeamSlider";

function App() {
  return (
    <>
      {/**********start hero page************/}
      <section className="hero-section">
        <div className="hero">
          <div className="container">
            <div className="hero-text">
              <h1>
                We Hospital Doctors Patients
                <span>Service.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Duis at velit maximus consectetur
                adipisicing elit. Voluptas, autem?
              </p>
              <div className="service-info">
                <h3>Receive Medical Service.</h3>
                <p>Call Us at: (+2) 56 54 1453</p>
              </div>
              <div className="btu">
                <a href="#" className="btn rounded-pill main-btn">
                  Our Services<i className="fa-solid fa-angles-right"></i>
                </a>
                <a href="#" className="btn rounded-pill main-btn">
                  Learn More<i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
            <div className="hero-img">
              <img src="./src/assets/images/d1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/**********End hero page************/}
      {/**********start search page************/}
      <div className="search">
        <div className="container">
          <h3>Find Best HealthCare</h3>
          <div className="app-search">
            <div className="search-box">
              <i className="fa-brands fa-searchengin"></i>
              <input type="text" placeholder="Search Doctor Here" />
            </div>
            <div className="search-box">
              <i className="fa-solid fa-location-dot"></i>
              <input type="text" placeholder="Set Your Location" />
            </div>
            <button>
              <i className="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
      </div>
      {/**********End search page************/}
      {/**********start About page************/}
      <section className="about-section mt-5">
        <div className="container">
          <div className="about-all">
            <div className="about-img">
              <img
                src="src/assets/images/story_img.jpg"
                alt="About Story"
                className="img-fluid"
              />
              <a href="#" className="play-btn">
                <i className="fa-solid fa-play"></i>
                Play video
              </a>
            </div>
            <div className="about-text">
              <div className="title-wrapper-oneside mb-4">
                <div className="title-oneside">OUR ABOUT US</div>
              </div>
              <h2>More Than 26+ Years About Provide Medical.</h2>
              <p>
                We are privileged to work with hundreds of future-thinking
                medical, including many of the world's top hardware, software,
                and brands. Feel safe and comfortable in establishing.
              </p>
              <p>
                We are privileged to work with hundreds of future-thinking
                medical, including many of the world's top hardware, software,
                and brands. Feel safe and comfortable in establishing.
              </p>

              <div className="support-boxes">
                <div className="support">
                  <i className="fa-solid fa-user"></i>
                  <h4>Client Support</h4>
                  <p>But must explain to you medical of and pain was.</p>
                </div>
                <div className="support">
                  <i className="fa-solid fa-user-doctor"></i>
                  <h4>Doctor Support</h4>
                  <p>But must explain to you medical of and pain was.</p>
                </div>
              </div>
              <div className="btn-about ">
                <a href="#" className="btn rounded-pill main-btn">
                  About More <i className="fa-solid fa-angles-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**********End About page************/}
      {/********* start counters *********/}
      <section>
        <div className="container">
          <div className="counters">
            <div className="counter">
              <i className="fa-solid fa-chart-line"></i>
              <h3>567+</h3>
              <p>Active Clients</p>
            </div>
            <div className="counter">
              <i className="fa-solid fa-headset"></i>
              <h3>23K+</h3>
              <p>Team Support</p>
            </div>
            <div className="counter">
              <i className="fa-solid fa-list-check"></i>
              <h3>241+</h3>
              <p>Projects Complete</p>
            </div>
            <div className="counter">
              <i className="fa-solid fa-trophy"></i>
              <h3>16K+</h3>
              <p>Award Winner</p>
            </div>
          </div>
        </div>
      </section>
      {/********* End counters *********/}
      {/* Services Section */}
      <section className="services py-5 mt-5">
        <div className="container">
          <div className="title-wrapper-oneside mb-4">
            <div className="title-oneside">OUR SERVICE</div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-sm-6 col-md-4">
              <h1 className="h3 h-md-2 fw-bold">
                High-Quality Services This Doctor
              </h1>
            </div>
            <div className="col-md-4 d-none d-md-block"></div>
            <div className="col-sm-6 col-md-4">
              <small>
                We are privileged to work with hundreds of future-thinking
                medial, including many of the world’s top hardware, software,
                and brands, feel safe and comfortable in establishing.
              </small>
            </div>
          </div>

          <div className="services-container row g-4 text-center">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="service-card p-4 shadow-sm rounded h-100">
                <i className="fa-solid fa-briefcase-medical"></i>
                <h3 className="mt-3">Pharmacology</h3>
                <p className="mb-0">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="service-card p-4 shadow-sm rounded h-100">
                <i className="fa-solid fa-bone"></i>
                <h3 className="mt-3">Orthopedic</h3>
                <p className="mb-0">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="service-card p-4 shadow-sm rounded h-100">
                <i className="fa-solid fa-heart-pulse"></i>
                <h3 className="mt-3">Hematology</h3>
                <p className="mb-0">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="service-card p-4 shadow-sm rounded h-100">
                <i className="fa-solid fa-user-doctor"></i>
                <h3 className="mt-3">Plastic Surgery</h3>
                <p className="mb-0">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="service-card p-4 shadow-sm rounded h-100">
                <i className="fa-solid fa-brain"></i>
                <h3 className="mt-3">Neurology</h3>
                <p className="mb-0">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="service-card p-4 shadow-sm rounded h-100">
                <i className="fa-solid fa-eye"></i>
                <h3 className="mt-3">Ophthalmology</h3>
                <p className="mb-0">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="service-card p-4 shadow-sm rounded h-100">
                <i className="fa-solid fa-tooth"></i>
                <h3 className="mt-3">Dental Care</h3>
                <p className="mb-0">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="service-card p-4 shadow-sm rounded h-100">
                <i className="fa-solid fa-stethoscope"></i>
                <h3 className="mt-3">Cardiology</h3>
                <p className="mb-0">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mt-5 text-center">
            <p className="mb-3 mb-md-0 fw-medium text-dark">
              <i className="fa-solid fa-truck-medical text-primary me-2"></i>
              Delivering tomorrow’s health care for your family.
            </p>
            <a
              href="#"
              className="btn btn-link text-decoration-none fw-semibold text-primary ms-md-3"
            >
              SEE MORE <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </section>
      {/* Team Members Section */}
      <section className="team-members">
        <div className="container text-center my-5">
          <div className="two-sides-title-wrapper">
            <h5 className="two-sides-title">OUR TEAM MEMBERS</h5>
          </div>
          <h4 className="">Book from top Specialties</h4>
        </div>
        <div className="container">
          <TeamSlider />
        </div>
      </section>
      {/*start why choose us*/}
      <section className="choose-us">
        <div className="container">
          <div className="left-card-choose-us">
            <div className="title-wrapper-oneside mb-4">
              <div className="title-oneside">Why Choose us</div>
            </div>
            <div className="choose-us-subtitle">
              <h1 className="fw-bold">
                Medical Ready To Get This <br /> Health Solution.
              </h1>
            </div>

            <div className="choose-us-content">
              <div className="choose-us-card">
                <div className="choose-us-icon">
                  <i className="fa-solid fa-suitcase-medical"></i>
                </div>
                <div className="choose-us-card-content">
                  <h5>Service & Check</h5>
                  <p>Medical competitor research startup to financial</p>
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-icon">
                  <i className="fa-solid fa-pills"></i>
                </div>
                <div className="choose-us-card-content">
                  <h5>Medical Advices</h5>
                  <p>Medical competitor research startup to financial</p>
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-icon">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
                <div className="choose-us-card-content">
                  <h5>Emergency Help</h5>
                  <p>Medical competitor research startup to financial</p>
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-icon">
                  <i className="fa-solid fa-prescription-bottle-medical"></i>
                </div>
                <div className="choose-us-card-content">
                  <h5>Medical Research</h5>
                  <p>Medical competitor research startup to financial</p>
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-icon">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <div className="choose-us-card-content">
                  <h5>Qualified Doctors</h5>
                  <p>Medical competitor research startup to financial</p>
                </div>
              </div>

              <div className="choose-us-card">
                <div className="choose-us-icon">
                  <i className="fa-solid fa-syringe"></i>
                </div>
                <div className="choose-us-card-content">
                  <h5>Affordable Prices</h5>
                  <p>Medical competitor research startup to financial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Why choose us section  */}
      {/* Start portfolio section*/}
      <section className="portfolio">
        <div className="container">
          <div className="portfolio-header">
            <div className="portfolio-header-left">
              <div className="title-wrapper-oneside mb-4">
                <div className="title-oneside">OUR PORTFOLIO</div>
              </div>

              <div className="portfolio-subtitle">
                <h1 className="fw-bold">
                  All The Great Work That
                  <br />
                  We Done
                </h1>
              </div>
            </div>

            <div className="portfolio-header-right">
              <p>
                We are privileged to work with hundreds of future-thinking
                medial,including many of the world's top hardware, software, and
                brands . feel safe and comfortable in establishing.
              </p>
              <div className="portfolio-btns">
                <a href="#" className="portfolio-btn  ">
                  <button className="f-btn highlighted">Dental</button>
                </a>
                <a href="#" className="portfolio-btn">
                  <button>Cardiology</button>
                </a>
                <a href="#" className="portfolio-btn">
                  <button>Neurology</button>
                </a>
                <a href="#" className="portfolio-btn">
                  <button>Medical</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card-content">
            <img
              src="./src/./assets/images/project_2.jpg"
              alt="Doctors Image"
            />
            <Portfolio title="Medical Of Working" number="01">
              <p>
                We business standard chunk of Ipsum used since is Agency & Star
                tup.
              </p>
            </Portfolio>
          </div>
          <div className="portfolio-card-content">
            <img
              src="./src/./assets/images/project_2.jpg"
              alt="Doctors Image"
            />
            <Portfolio title="Medical Of Dental" number="02">
              <p>
                We business standard chunk of Ipsum used since is Agency & Star
                tup.
              </p>
            </Portfolio>
          </div>

          <div className="portfolio-card-content">
            <img
              src="./src/./assets/images/project_3.jpg"
              alt="Doctors Image"
            />
            <Portfolio title="Laboratory Technologist" number="03">
              <p>
                We business standard chunk of Ipsum used since is Agency & Star
                tup.
              </p>
            </Portfolio>
          </div>
        </div>
      </section>
      {/*End portfolio section */}
      {/* Start video section*/}
      <section className="video mb-5">
        <div className="video-left-section">
          <div className="play-icon-wrapper">
            <i className="fa-solid fa-play "></i>
          </div>
          <div>
            <h5>WATCH VIDEO</h5>
          </div>
        </div>

        <div className="video-right-section">
          <div className="title-wrapper-oneside mb-4">
            <div className="title-oneside">OUR WATCH VIDEO</div>
          </div>
          <div className="video-subtitle">
            <h1>
              Professional Medical Care
              <br />
              Measure Medical.
            </h1>
            <p>
              We are privileged to work with hundreds of future-thinking medial,
              including many of the world's top hardware, software, and brands .
              feel safe and comfortable in establishing.
            </p>
            <a href="#">
              <button>
                Video More &nbsp;
                <i
                  className="fa-solid fa-angles-right"
                  style={{ fontSize: "17px" }}
                ></i>
              </button>
            </a>
          </div>
          <div className="shield-icon">
            <img src="./src/assets/images/medical_brand.png" />
          </div>
        </div>
      </section>
      {/* End video section*/}
      {/* start service offerings section */}
      <section className="service-offerings-section">
        <div className="container">
          <div className="service-offerings">
            <div className="two-sides-title-wrapper ">
              <h5 className="two-sides-title">SERVICE OFFERINGS</h5>
            </div>{" "}
            <h1>
              Explore Our Service <br />
              Offerings
            </h1>
          </div>
          <div className="advantages">
            <div className="item item1">
              <div className="icon">
                <i
                  className="fa-solid fa-brain"
                  style={{ color: " white;" }}
                ></i>
              </div>
              <div className="caption">Modern Technology</div>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fa-solid fa-truck-medical"></i>
              </div>
              <div className="caption">Success of Treatment</div>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <div className="caption">Certified Doctors</div>
            </div>

            <div className="item">
              <div className="icon">
                <i className="fa-solid fa-syringe"></i>
              </div>
              <div className="caption">Medical Advice</div>
            </div>
          </div>
          <div className="triangle"></div>
          <div className="items-wrap">
            <div className="photo">
              <img
                src="./src/assets/images/doctors-presentation.jpg"
                alt="doctor presentation"
              />
            </div>
            <div className="discription">
              <h1>We are here to hear and heal your</h1>
              <p>
                We are privileged to work with hundreds of future-thinking
                medical,
                <br /> including many of the world’s top hardware, software, and
                brands, feel
                <br /> safe and comfortable in establishing.
              </p>
              <br />
              <div className="check-wrap">
                <i className="fa-solid fa-check"></i>
                <span>
                  Medical sint occaecat cupidatat non proident, sunt in culpa
                  officia deserunt mollit anim id est laborum.
                </span>
              </div>
              <br />

              <div className="check-wrap">
                <i className="fa-solid fa-check"></i>
                <span>
                  {" "}
                  We are occaecat cupidatat non proident, sunt in culpa officia
                  deserunt mollit anim id est healty.
                </span>
              </div>

              <button className="read-more">
                Read More &nbsp;&nbsp;
                <i
                  className="fa-solid fa-angles-right"
                  style={{ fontSize: "17px" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      {/* End service offerings section */}
      {/*start contact us section*/}
      <br />
      <section className="contact-section">
        {/*left side image*/}
        <div className="contact-wrapper">
          <div className="contact-form">
            <div className="title-wrapper-oneside mb-4">
              <div className="title-oneside">CONTACT US</div>
            </div>
            <h2>
              Make An Appointment
              <br />
              Apply For Treatments
            </h2>

            <div className="form-row">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Your Subject" />
              <input type="text" placeholder="Your phone" />
            </div>
            <div className="form-row">
              <textarea
                placeholder="Your comments"
                className="problem"
              ></textarea>
            </div>
            <button type="submit">Send Request</button>
          </div>

          {/*right side image*/}
          <div className="contact-image">
            <img
              src="./src/assets/images/slider-2.jpg"
              alt="doctor and patient image"
            />
          </div>
        </div>
      </section>
      {/*End contact us*/}
      {/*Blog section*/}
      <section className="blog">
        <div className="blog-container text-center my-5">
          <div className="two-sides-title-wrapper">
            <h5 className="two-sides-title">OUR LATEST BLOG</h5>
          </div>
          <h4 className="">Latest Posts & Articles</h4>
        </div>
        <div className="container">
          {/*slider*/} <BlogSlider />
        </div>
      </section>
    </>
  );
}

export default App;
