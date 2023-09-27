import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DesktopNavItem from './DesktopNavItem';
import Logo from '../../assets/img/logo-190.png';
import navbarResources from '../../resources/navbarResources';

export default function DesktopNavbar() {

    const submenu = ['betaInfo1', 'betaInfo2', 'betaInfo3'];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light-blue">
            <div className="container-fluid">
                <Link className="navbar-brand ps-4 ms-2" to="/">
                    <img className='w-75' src={Logo} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <div className="navbar-nav d-flex align-items-center">
                        {navbarResources.map(item =>
                            <DesktopNavItem menu={item.name} submenu={item.childs} />
                        )}
                        <div className='ms-4 ps-2 d-flex flex-row flex-nowrap'>
                            <i class="bi bi-facebook text-white h3 mb-0"></i>
                            <i class="bi bi-instagram text-white h3 ms-4 ps-2 mb-0"></i>
                        </div>
                        <div className='mx-4'>
                            <button type="button" class="btn btn-light text-info py-3 px-4">Book now</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
