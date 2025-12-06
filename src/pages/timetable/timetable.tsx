import './timetable.css';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/all.min.css";
import "../../assets/css/fonts.css";



const Timetable = () => {
    return (
        <>
            <BreadCrumbs title="Timetable" page="Events Calendar" />

            <main className="page" style={{ marginBottom: '100px' }}>
                <header className="page-header">
                    <div className="small-label">OUR TIMETABLE</div>
                    <h1 className="title">Events Calendar Specialist This Timetable Meet</h1>
                </header>

                <section className="timetable-wrapper">
                    <div className="timetable-grid">
                        <div className="cell head time-head">TIME</div>
                        <div className="cell head">SATURDAY</div>
                        <div className="cell head">SUNDAY</div>
                        <div className="cell head">MONDAY</div>
                        <div className="cell head">TUESDAY</div>
                        <div className="cell head">WEDNESDAY</div>
                        <div className="cell head">THURSDAY</div>
                        <div className="cell head">FRIDAY</div>

                        <div className="cell time-cell">10.00</div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Dental</div>
                                <div className="event-meta">11.00–12.00<br />Dr.Porta</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Dental</div>
                                <div className="event-meta">11.00–12.00<br />Dr.Porta</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">10.00–11.00<br />Routine</div>
                            </div>
                        </div>
                        <div className="cell"></div>
                        <div className="cell">
                            <div className="event small">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">10.00–11.00<br />Laparoscopy</div>
                            </div>
                        </div>
                        <div className="cell"></div>
                        <div className="cell">
                            <div className="event small">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">10.00–11.00<br />Laparoscopy</div>
                            </div>
                        </div>

                        <div className="cell time-cell">11.00</div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">11.00–12.00<br />Randy Nelson</div>
                            </div>
                        </div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>

                        <div className="cell time-cell">12.00</div>
                        <div className="cell"></div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">11.00–12.00<br />Randy Nelson</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Dental</div>
                                <div className="event-meta">11.00–12.00<br />Dr.Porta</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">10.00–11.00<br />Routine</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">11.00–12.00<br />Randy Nelson</div>
                            </div>
                        </div>
                        <div className="cell"></div>
                        <div className="cell"></div>

                        <div className="cell time-cell">13.00</div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">10.00–11.00<br />Laparoscopy</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">10.00–11.00<br />Laparoscopy</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">11.00–12.00<br />Randy Nelson</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">10.00–11.00<br />Routine</div>
                            </div>
                        </div>
                        <div className="cell"></div>

                        <div className="cell time-cell">14.00</div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">10.00–11.00<br />Routine</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">10.00–11.00<br />Runada</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">11.00–12.00<br />Randy Nelson</div>
                            </div>
                        </div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Pulmonary</div>
                                <div className="event-meta">10.00–11.00<br />Routine</div>
                            </div>
                        </div>

                        <div className="cell time-cell">15.00</div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>

                        <div className="cell time-cell">16.00</div>
                        <div className="cell"></div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">11.00–12.00<br />Randy Nelson</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">10.00–11.00<br />Laparoscopy</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">10.00–11.00<br />Laparoscopy</div>
                            </div>
                        </div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                        <div className="cell"></div>

                        <div className="cell time-cell">17.00</div>
                        <div className="cell"></div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">11.00–12.00<br />Randy Nelson</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Dental</div>
                                <div className="event-meta">11.00–12.00<br />Dr.Porta</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Dental</div>
                                <div className="event-meta">11.00–12.00<br />Dr.Porta</div>
                            </div>
                        </div>
                        <div className="cell">
                            <div className="event">
                                <div className="event-title">Cardiology</div>
                                <div className="event-meta">11.00–12.00<br />Randy Nelson</div>
                            </div>
                        </div>
                        <div className="cell"></div>
                        <div className="cell"></div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Timetable;