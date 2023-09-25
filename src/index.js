import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

import App from './App';
import CheckDates from './views/availability/checkDates/CheckDates';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/availability" element={<CheckDates />}>
        <Route path="check-dates" element={<CheckDates />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);