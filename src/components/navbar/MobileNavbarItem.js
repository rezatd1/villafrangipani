import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../assets/img/left-arrow-10.webp'

export default function MobileNavbarItem({ keyId, route, className, onClick, linkClassName, name, imgClassName }) {
    return (
        <div key={keyId} className={className} onClick={onClick}>
            <Link to={route} className={linkClassName} >{name}</Link>
            <img alt={name} className={imgClassName} src={Icon}></img>
        </div>)
}
