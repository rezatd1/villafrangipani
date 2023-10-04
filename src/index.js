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
import Menu from './views/experience/menu/Menu';
import Family from './views/experience/family/Family';
import Staff from './views/experience/staff/Staff';
import Map from './views/Location/map/Map';
import Neighbourhood from './views/Location/neighbourhood/Neighbourhood';
import Beachclubs from './views/Location/beachclubs/Beachclubs';
import Attractions from './views/Location/attractions/Attractions';
import Reviews from './views/availability/reviews/Reviews';
import Rates from './views/availability/rates/Rates';

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
      <Route path="/experience/menu" element={<Menu />} />
      <Route path="/experience/family" element={<Family />} />
      <Route path="/experience/staff" element={<Staff />} />
      <Route path="/location" element={<Map />} />
      <Route path="/location/map" element={<Map />} />
      <Route path="/location/neighbourhood" element={<Neighbourhood />} />
      <Route path="/location/beachclubs" element={<Beachclubs />} />
      <Route path="/location/attractions" element={<Attractions />} />
      <Route path="/availability" element={<CheckDates />} />
      <Route path="/availability/reviews" element={<Reviews />} />
      <Route path="/availability/rates" element={<Rates />} />
      <Route path="/availability/check-dates" element={<CheckDates />} />
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);