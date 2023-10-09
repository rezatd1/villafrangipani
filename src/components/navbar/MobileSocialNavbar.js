import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/img/facebook-30.webp';

export default function MobileSocialNavbar() {
    return (
        <div className='bottom-navbar'>
            <div className='py-5 mt-4 ms-2 d-flex algin-items-center'>
                <a target="_blank" className='mobile-facebook-icon' href='https://www.facebook.com/VillaFrangipaniWelcome/'><img className='fs-4' src={facebook} /></a>
                <a target="_blank" href='https://www.instagram.com/villa_frangipani/'><i class="bi bi-instagram text-white h3 ms-4 ps-2 mb-0"></i></a>
            </div>
            <button type="button" className="btn bg-light-blue text-white px-5">
                <Link to='/contact' className='text-white text-decoration-none'>Book Now</Link>
            </button>
        </div>
    )
}
