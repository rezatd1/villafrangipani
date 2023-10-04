import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-190.png';
import navbarResources from '../../resources/navbarResources';
import DesktopNavItem from './DesktopNavItem';

export default function DesktopNavbar() {

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
                            <a href='https://www.facebook.com/VillaFrangipaniWelcome/'><i class="bi bi-facebook text-white h3 mb-0"></i></a>
                            <a href='https://www.instagram.com/villa_frangipani/'><i class="bi bi-instagram text-white h3 ms-4 ps-2 mb-0"></i></a>
                        </div>
                        <div className='mx-4 book-btn'>
                            <a href='https://villafrangipani.id/contact'><button type="button" class="btn cu-bg-white light-blue py-3 px-4 book-btn">Book now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
