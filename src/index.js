import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';
import CheckDates from './views/availability/checkDates/CheckDates';
import RoomsAndMore from './views/theVilla/roomsAndMores/RoomsAndMore';
import Gallery from './views/theVilla/gallery/Gallery';
import FloorPlan from './views/theVilla/floorPlan/FloorPlan';
import Dining from './views/experience/dining/Dining';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/the-villa" element={<RoomsAndMore />} />
      <Route path="/the-villa/rooms-and-more" element={<RoomsAndMore />} />
      <Route path="/the-villa/gallery" element={<Gallery />} />
      <Route path="/the-villa/floorplan" element={<FloorPlan />} />
      <Route path="/experience" element={<Dining />} />
      <Route path="/experience/dining" element={<Dining />} />
      <Route path="/availability" element={<CheckDates />}>
        <Route path="check-dates" element={<CheckDates />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);