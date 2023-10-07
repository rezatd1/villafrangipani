import React, { useEffect, useState } from 'react';
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
            <Link className={`nav-link text-white ${submenu.length > 0 ? 'dropdown-toggle' : ''}`} to={menu.route} >
                {menu.name}
            </Link>
            {submenu.length > 0 ?
                <div className={`dropdown-menu border-0 rounded-0 bg-light-blue ${isDropdownOpen ? ' show' : ''}`}>
                    {submenu.map(item => <div key={item.id}><Link className="dropdown-item text-white font-size-1-1" to={item.route}>{item.submenu}</Link></div>)}
                </div> : null}
        </div >
    )
}
