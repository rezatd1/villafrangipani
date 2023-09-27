import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DesktopNavItem({ menu, submenu }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div
            className="nav-item dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link className={`nav-link text-white ${submenu.length > 0 ? 'dropdown-toggle' : ''}`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen}>
                {menu}
            </Link>
            {submenu.length > 0 ?
                <div className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`}>
                    {submenu.map(item => <div><Link className="dropdown-item" to="/">{item}</Link></div>)}
                </div> : null}
        </div >
    )
}
