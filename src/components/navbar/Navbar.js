import React, { useState } from 'react';
import CommonHelper from '../../utilities/commonHelper/CommonHelper';

import './navbar.scss';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {

  return (
    <>
      {CommonHelper.isMobileDevice() ? <MobileNavbar /> : <DesktopNavbar />}
    </>
  );
}