import React, { useState } from 'react';
import CommonHelper from '../../utilities/commonHelper/CommonHelper';

import './navbar.scss';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light-blue">
      {CommonHelper.isMobileDevice() ? <MobileNavbar /> : <DesktopNavbar />}
    </nav>
  );
}