import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileSocialNavbar() {
    return (
        <div className='bottom-navbar'>
            <div className='py-5 mt-4 ms-2'>
                <i className="bi bi-facebook text-light h3"></i>
                <i className="bi bi-instagram text-light h3 ps-4"></i>
            </div>
            <button type="button" className="btn bg-light-blue text-white px-5">
                <Link to='/contact' className='text-white text-decoration-none'>Book Now</Link>
            </button>
        </div>
    )
}
