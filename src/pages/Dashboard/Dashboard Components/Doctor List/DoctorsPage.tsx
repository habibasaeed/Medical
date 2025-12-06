import React, { useState } from "react";
import DoctorsList from "../Doctor List/DoctorsList";
import AddDoctor from "../Doctor List/AddDoctor";
import "./DoctorsPage.css";

export default function DoctorsPage() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="doctor-page-wrapper">
      {/* LEFT SIDE - LIST */}
      <div className="left-panel">
        <DoctorsList refresh={refresh} />
      </div>

      {/* RIGHT SIDE - ADD FORM */}
      <div className="right-panel">
        <AddDoctor onAdded={() => setRefresh(!refresh)} />
      </div>
    </div>
  );
}
