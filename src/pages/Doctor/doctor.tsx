import './doctor.css';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import TeamSlider from "../../components/Slider/TeamSlider";
function DoctorProfile() {
    return (
        <>
            <BreadCrumbs title="Doctor Profile" page="Doctor Details" />

            <div className="container" style={{ marginTop: '50px', marginBottom: '100px' }}>
                <section className="profile-card">
                    <div className="card-image-wrapper">
                        <div className="hover-decor"></div>
                        <img src="src/assets/images/team_14.jpg" alt="Dr. Lataro" />
                    </div>

                    <div className="card-content">
                        <div className="header">
                            <h1>Dr. Lataro Bara</h1>
                            <span className="role">Manager</span>
                        </div>

                        <div className="description">
                            <p>
                                We virtual desktop offers a fast and reliable best from anywhere. A truly powerful tool where your data and applications are secured in a private location.
                            </p>
                            <p>
                                The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...
                            </p>
                        </div>

                        <div className="info-grid">
                            <div className="info-item">
                                <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="text">
                                    <h3>Location</h3>
                                    <span>Dhaka, Dhaka 31</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon"><i className="fas fa-envelope"></i></div>
                                <div className="text">
                                    <h3>E-mail:</h3>
                                    <span>ranst@g-mail.com</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon"><i className="fas fa-certificate"></i></div>
                                <div className="text">
                                    <h3>Qualification</h3>
                                    <span>M.S.S</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon"><i className="fas fa-globe"></i></div>
                                <div className="text">
                                    <h3>Website</h3>
                                    <span>demo.com</span>
                                </div>
                            </div>
                            <div className="info-item no-border-bottom">
                                <div className="icon"><i className="fas fa-briefcase"></i></div>
                                <div className="text">
                                    <h3>Experience</h3>
                                    <span>2 - 4 Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. شريط المهارات (Progress Bars) */}
                <div className="progress-section">
                    <div className="progress-box">
                        <div className="p-header"><span>Medical</span><span>44%</span></div>
                        <div className="p-bar">
                            <div className="p-fill" style={{ width: '44%' }}></div>
                        </div>
                    </div>
                    <div className="progress-box">
                        <div className="p-header"><span>Solution</span><span>78%</span></div>
                        <div className="p-bar">
                            <div className="p-fill" style={{ width: '78%' }}></div>
                        </div>
                    </div>
                    <div className="progress-box">
                        <div className="p-header"><span>Dental</span><span>65%</span></div>
                        <div className="p-bar">
                            <div className="p-fill" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                    <div className="progress-box">
                        <div className="p-header"><span>Medical Lab</span><span>85%</span></div>
                        <div className="p-bar">
                            <div className="p-fill" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="team-section" style={{ marginTop: '80px' }}>
                    <h2 style={{ marginBottom: '30px', fontWeight: 'bold' }}>Related Doctors</h2>
                    <TeamSlider />
                </div>

            </div>
        </>
    );
}

export default DoctorProfile;