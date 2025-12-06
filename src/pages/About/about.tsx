
import { Link } from 'react-router-dom';
import './about.css';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "../../assets/css/responsive.css";
const AboutSection = () => {
    return (
        <>
            <BreadCrumbs title="About Us" page="About Details" />

            <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <p className="section-label">OUR ABOUT US</p>
                <div className="about-all">
                    <div className="about-img">
                        <img src="src/assets/images/story_img.jpg" alt="About Story" />
                        <a href="#" className="play-btn">
                            <i className="fa-solid fa-play"></i>
                            Play video
                        </a>
                    </div>

                    <div className="about-text">
                        <h2>More Than 26+ Years About Provide Medical.</h2>
                        <p>
                            We are privileged to work with hundreds of future-thinking medical, including many of the
                            world's top hardware, software, and brands.
                            Feel safe and comfortable in establishing.
                        </p>
                        <p>
                            We are privileged to work with hundreds of future-thinking medical, including many of the
                            world's top hardware, software, and brands.
                            Feel safe and comfortable in establishing.
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

                        <div className="btn-about">
                            <Link to="/contact" className="btn rounded-pill main-btn">
                                Contact Us <i className="fa-solid fa-angles-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* ********** End About Section ************ */}

            {/* ********* Start Counters ********* */}
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
            {/* ********* End Counters ********* */}
        </>
    );
};

export default AboutSection;