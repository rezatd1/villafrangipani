import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DesktopNavItem from './DesktopNavItem';

export default function DesktopNavbar() {

    const submenu = ['betaInfo1', 'betaInfo2', 'betaInfo3'];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light-blue">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <div className="navbar-nav">
                        <div className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </div>
                        <DesktopNavItem menu='betaInfoMenu' submenu={submenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
