import React from "react";

import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/copyright/CopyRight";
import Calendar from "../../../components/calendar/Calendar";

export default function CheckDates() {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Calendar />
      <Footer />
      <CopyRight />
    </div>
  );
}
