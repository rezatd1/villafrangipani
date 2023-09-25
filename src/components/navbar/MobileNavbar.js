import React, { useState } from 'react';

import collapseIcon from '../../assets/img/navbar-collapsed-icon (2).png';
import expandIcon from '../../assets/img/navbar-expand-icon.png'
import Logo from '../../assets/img/logo-220.png';

export default function MobileNavbar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const navbarToggler = () => setIsExpanded(!isExpanded);

  return (
    <>
      {!isExpanded ?
        <div className='w-100 h-100 bg-light-blue d-flex justify-content-between py-1'>
          <div className='c-nav-logo pt-3 ps-4'>
            <img className='w-25' src={Logo} />
          </div>
          <div className='h4 pt-3 pe-4 pb-2' onClick={navbarToggler}>
            <img className='w-75' src={collapseIcon} />
          </div>
        </div>
        : <div className='w-100 h-100 bg-light-blue d-flex justify-content-between py-1'>
          <div className='c-nav-logo pt-3 ps-4'>
            <img className='w-25' src={Logo} />
          </div>
          <div className='h4 pt-3 pe-4 pb-2' onClick={navbarToggler}>
            <img className='w-75' src={collapseIcon} />
          </div>
        </div>
      }

    </>
  )
}
