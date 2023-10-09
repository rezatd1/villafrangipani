import React from 'react';

import Logo from '../../assets/img/logo-220.webp';
import { Link } from 'react-router-dom';

export default function MobileNavbarHeader({ navContainerClassName, toggleIcon, onToggle, childsSetter }) {
    const navbarToggler = () => {
        onToggle('Some data');
        childsSetter([]);
    };

    return (
        <div className={`w-100 h-100 d-flex justify-content-between ${navContainerClassName}`}>
            <div className='c-nav-logo pt-3 ps-4'>
                <Link to='/'><img className='w-25' src={Logo} /></Link>
            </div>
            <div className='h4 pt-3 pe-4 pb-2 cursor-pointer' onClick={navbarToggler}>
                <img className='w-75' src={toggleIcon} />
            </div>
        </div>
    );
}
