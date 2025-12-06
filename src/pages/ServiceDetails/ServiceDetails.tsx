import serviceDetailsOne from "../../assets/images/service_details_1.jpg";
import serviceDetailsTwo from "../../assets/images/service_details_2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import "./ServiceDetails.css";
import "./ServiceDetailsResponsive.css";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

function ServiceDetails() {
  return (
    <>
      <BreadCrumbs title="Our Services" page="services" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      {/* start all service */}
      <section className="all-service">
        <div className="container ">
          <div className="row">
            <div className="col-sm-4">
              <div className="card py-2 ps-2">
                <div className="card-body">
                  <h5 className="card-title fw-bold">All Service:</h5>
                  <br />
                  <ul className="all-service-btns">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCheck} className="true-icon" />
                        Medical lab Service
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCheck} className="true-icon" />
                        Dental best Service
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCheck} className="true-icon" />
                        Doctor best service
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCheck} className="true-icon" />
                        Team Help Achieve
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCheck} className="true-icon" />
                        Medical Goals Labs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <img
                src={serviceDetailsOne}
                alt="service-image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* end all service  */}

      {/* start service paragraph */}
      <section className="service-par">
        <div className="container">
          <h3 className="fw-bold py-4">Service Details:</h3>
          <p>
            It is a long established fact that a reader will be distracted
            restore inexpensive e-markets vis to is a long established fact that
            a reader will be distracted restore inexpensive e-markets vis to
            corporate intellectual capital. Holisticly reinvent compelling niche
            markets via scalable strategic. by the readable content of a page
            when looking. vis corporate intellectual capital. Holisticly
            reinvent compelling niche markets via scalabl etrategic.by the
            meadable content of a page when looking at its layout. The point to
            this singis that normal distribution of Medical
          </p>
          <p>
            We is a long established fact that a reader will be distracted
            restore inexpensive e-markets vis tontellectual capital. Holisticly
            reinvent compelling niche markets via scalable strategic. by the
            readable content of a page when looking. vis corporate intellectual
            capital. vis corporate intellectual capitalh olisticly reinvent
            compelling niche markets via scalable strategic. by the readable
            content of a page when looking.
          </p>
        </div>
      </section>
      {/* end service paragraph */}

      {/* start service details items */}
      <section className="service-details-items pt-5">
        <div className="container">
          <div className="row">
            <div className="col service-items-image">
              <img src={serviceDetailsTwo} alt="Service Details Image" />
            </div>
            <div className="col ">
              <div className="cards-wrapper pb-2">
                {/* cardOne */}
                <div className="card p-2 service-details-item-card rounded-4">
                  <div className="overlay"></div>
                  <div className="cards-header pt-3">
                    <FontAwesomeIcon
                      icon={faBriefcaseMedical}
                      className="service-items-icon"
                    />
                    <h3 className="card-num">01</h3>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Service & Check</h5>
                    <p className="card-subtitle mb-2 text-body-secondary">
                      Medical competitor research startup to financial
                    </p>
                  </div>
                </div>
                {/* cardTwo */}
                <div className="card p-2 service-details-item-card rounded-4">
                  <div className="overlay"></div>
                  <div className="cards-header pt-3">
                    <FontAwesomeIcon
                      icon={faTruckMedical}
                      className="service-items-icon"
                    />
                    <h3 className="card-num">02</h3>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Medical Care</h5>
                    <p className="card-subtitle mb-2 text-body-secondary">
                      Medical competitor research startup to financial
                    </p>
                  </div>
                </div>
              </div>
              <div className="sub-service-details">
                <FontAwesomeIcon icon={faCheck} className="true-icon" />
                <p>
                  There are many variations of pass available this medical
                  service the team
                  <a href="#" className="text-hover-right">
                    READ MORE+
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="pt-4 service-details-items-para">
              We is a long established fact that a reader will be
              distractedrestore inexpensive e-markets vis tontellectual capital.
              Holisticly reinvent compelling niche markets via scalable
              strategic. by the readable content of a page when looking. vis
              corporate intellectual capital. vis corporate intellectual
              capitalh olisticly reinvent compelling niche markets via scalable
              strategic. by the readable content of a page when looking.
            </p>
          </div>
        </div>
      </section>
      {/* end service details items  */}

      {/*  start service numbers */}
      <section className="service-numbers pt-5 ">
        <div className="container">
          <div className="service-numbers-cards">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="service-num-icons"
                />
                <h1 className="card-title pt-1 fw-bold">567+</h1>
                <p className="card-text fw-bold">Active Clients</p>
              </div>
            </div>

            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faHeadphones}
                  className="service-num-icons"
                />
                <h1 className="card-title pt-1 fw-bold">23k+</h1>
                <p className="card-text fw-bold">Team Support</p>
              </div>
            </div>

            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="service-num-icons"
                />
                <h1 className="card-title pt-1 fw-bold">241+</h1>
                <p className="card-text fw-bold">Projects Completed</p>
              </div>
            </div>

            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="service-num-icons"
                />
                <h1 className="card-title pt-1 fw-bold">16k+</h1>
                <p className="card-text fw-bold">Award Winner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end service numbers */}
    </>
  );
}

export default ServiceDetails;
