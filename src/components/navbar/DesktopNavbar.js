import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-190.webp';
import navbarResources from '../../resources/navbarResources';
import DesktopNavItem from './DesktopNavItem';
import facebook from '../../assets/img/facebook-300.webp';

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
                            <DesktopNavItem menu={item} submenu={item.childs} />
                        )}
                        <div className='ms-4 ps-2 d-flex flex-row flex-nowrap'>
                            <a target="_blank" href='https://www.facebook.com/VillaFrangipaniWelcome/'><img className='fs-4 w-100' src={facebook} /></a>
                            <a target="_blank" href='https://www.instagram.com/villa_frangipani/'><i class="bi bi-instagram text-white h3 ms-4 ps-2 mb-0"></i></a>
                        </div>
                        <div className='mx-4 book-btn'>
                            <button type="button" class="btn cu-bg-white light-blue py-3 px-4 book-btn"><Link className='light-blue text-decoration-none' to='/contact'>Book now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
