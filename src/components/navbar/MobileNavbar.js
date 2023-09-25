import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import collapseIcon from '../../assets/img/navbar-collapsed-icon (3).png';
import expandIcon from '../../assets/img/navbar-expand-icon.png'
import Logo from '../../assets/img/logo-220.png';
import leftArrowIcon from '../../assets/img/left-arrow-10.png';

export default function MobileNavbar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const navbarToggler = () => setIsExpanded(!isExpanded);

  return (
    <>
      {isExpanded ?
        <nav className="navbar navbar-expand-lg">
          <div className='w-100 h-100 d-flex justify-content-between bg-light-blue'>
            <div className='c-nav-logo pt-3 ps-4'>
              <img className='w-25' src={Logo} />
            </div>
            <div className='h4 pt-3 pe-4 pb-2' onClick={navbarToggler}>
              <img className='w-75' src={collapseIcon} />
            </div>
          </div>
        </nav>
        :
        <nav className="navbar navbar-expand-lg c-mobile-navbar">
          <div className='w-100 d-flex justify-content-between '>
            <div className='c-nav-logo pt-3 ps-4'>
              <img className='w-25' src={Logo} />
            </div>
            <div className='h4 pt-3 pe-4 pb-2' onClick={navbarToggler}>
              <img className='w-75' src={expandIcon} />
            </div>
          </div>
          <div className='c-mobile-submenu z-1 w-100 pt-3 ps-4 ms-1 mt-1'>
            <div className='ps-1'>
              <Link className='text-light h6' to='/'>Home</Link>
            </div>
            <div className='ps-1 mt-4'>
              <Link className='text-light h6 text-decoration-none' to='/'>The Villa</Link>
              <img className='ms-1' src={leftArrowIcon}></img>
            </div>
            <div className='ps-1 mt-4'>
              <Link className='text-light h6 text-decoration-none' to='/'>Experience</Link>
              <img className='ms-1' src={leftArrowIcon}></img>
            </div>
            <div className='ps-1 mt-4'>
              <Link className='text-light h6 text-decoration-none' to='/'>Location</Link>
              <img className='ms-1' src={leftArrowIcon}></img>
            </div>
            <div className='ps-1 mt-4'>
              <Link className='text-light h6 text-decoration-none' to='/'>Availability</Link>
              <img className='ms-1' src={leftArrowIcon}></img>
            </div>
            <div className='ps-1 mt-4'>
              <Link className='text-light h6 text-decoration-none' to='/'>Contact</Link>
            </div>
            <div className='ps-1 mt-4 pt-3'>
              <Link className='text-white cu-account-button'>Account</Link>
            </div>
            <div className='py-5 mt-4 ms-2'>
              <i className="bi bi-facebook text-light h3"></i>
              <i className="bi bi-instagram text-light h3 ps-4"></i>
            </div>
            <button type="button" class="btn bg-light-blue text-white px-5">Book Now</button>
          </div>
        </nav>
      }

    </>
  )
}
