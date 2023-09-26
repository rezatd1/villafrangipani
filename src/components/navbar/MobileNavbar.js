import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import collapseIcon from '../../assets/img/navbar-collapsed-icon (3).png';
import expandIcon from '../../assets/img/navbar-expand-icon.png'
import Logo from '../../assets/img/logo-220.png';
import leftArrowIcon from '../../assets/img/left-arrow-10.png';
import navbarResources from '../../resources/navbarResources';
import MobileNavbarItem from './MobileNavbarItem';
import MobileNavbarHeader from './MobileNavbarHeader';

export default function MobileNavbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [navbarPage, setNavbarPage] = useState('main');
  const [disableMenu, setDisableMenu] = useState(false);

  const handleToggle = (data) => {
    setTimeout(() => setIsExpanded(!isExpanded), 100)
    // setIsExpanded(!isExpanded)
    setDisableMenu(!disableMenu);
  };

  return (
    <>
      {isExpanded ?
        <nav className={`navbar navbar-expand-lg c-mobile-navbar-expand ${disableMenu ? 'fade-out' : ''}`}>
          <MobileNavbarHeader
            navContainerClassName='bg-light-blue'
            toggleIcon={expandIcon}
            onToggle={handleToggle}
          />
        </nav>
        :
        <nav className={`navbar navbar-expand-lg c-mobile-navbar ${!disableMenu ? 'fade-out' : ''}`}>
          <MobileNavbarHeader
            navContainerClassName=''
            toggleIcon={collapseIcon}
            onToggle={handleToggle}
          />
          <div class="c-mobile-submenu z-1 w-100 pt-2 ps-4 ms-1 mt-5">
            {navbarResources.map(item => <MobileNavbarItem className={item.className}
              linkClassName={item.linkClassName}
              name={item.name}
              imgClassName={item.imgClassName}
              icon={item.icon} />)}

            <div className='bottom-navbar'>
              <div className='py-5 mt-4 ms-2'>
                <i className="bi bi-facebook text-light h3"></i>
                <i className="bi bi-instagram text-light h3 ps-4"></i>
              </div>
              <button type="button" className="btn bg-light-blue text-white px-5">Book Now</button>
            </div>
          </div>
        </nav>
      }

    </>
  )
}
