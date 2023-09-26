import React from 'react';

import Logo from '../../assets/img/logo-220.png';

export default function MobileNavbarHeader({ navContainerClassName, toggleIcon, onToggle }) {
    const navbarToggler = () => {
        onToggle('Some data');
    };

    return (
        <div className={`w-100 h-100 d-flex justify-content-between ${navContainerClassName}`}>
            <div className='c-nav-logo pt-3 ps-4'>
                <img className='w-25' src={Logo} />
            </div>
            <div className='h4 pt-3 pe-4 pb-2' onClick={navbarToggler}>
                <img className='w-75' src={toggleIcon} />
            </div>
        </div>
    );
}
