import React, { useState } from 'react';

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
            <a className={`nav-link text-white fw-bold ${submenu.length > 0 ? 'dropdown-toggle' : ''}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen}>
                {menu}
            </a>
            {submenu.length > 0 ?
                <div className={`dropdown-menu border-0 rounded-0 bg-light-blue ${isDropdownOpen ? ' show' : ''}`}>
                    {submenu.map(item => <div key={item.id}><a className="dropdown-item text-white fw-bold" href={item.route}>{item.submenu}</a></div>)}
                </div> : null}
        </div >
    )
}
