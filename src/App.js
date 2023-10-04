import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import CheckDates from "./views/availability/checkDates/CheckDates";
import RoomsAndMore from "./views/theVilla/roomsAndMores/RoomsAndMore";
import Gallery from "./views/theVilla/gallery/Gallery";
import FloorPlan from "./views/theVilla/floorPlan/FloorPlan";
import Dining from "./views/experience/dining/Dining";
import Availability from "./views/availability/Availability";
import Rates from "./views/availability/rates/Rates";

import "./assets/sass/baseVariables/Color.scss";
import "./assets/sass/baseVariables/Fonts.scss";
import Home from "./views/home/Home";
import Layout from "./Layout";
import Contact from "./views/contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/the-villa" element={<RoomsAndMore />} />
            <Route
              path="/the-villa/rooms-and-more"
              element={<RoomsAndMore />}
            />
            <Route path="/the-villa/gallery" element={<Gallery />} />
            <Route path="/the-villa/floorplan" element={<FloorPlan />} />
            <Route path="/experience" element={<Dining />} />
            <Route path="/experience/dining" element={<Dining />} />
            <Route path="/availability" element={<Availability />}>
              <Route path="check-dates" element={<CheckDates />} />
              <Route path="rates" element={<Rates />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
