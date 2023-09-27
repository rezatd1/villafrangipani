import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../assets/img/left-arrow-10.png'

export default function MobileNavbarItem({ keyId, className, onClick, linkClassName, name, imgClassName }) {
    return (
        <div key={keyId} className={className} onClick={onClick}>
            <Link className={linkClassName} >{name}</Link>
            <img className={imgClassName} src={Icon}></img>
        </div>)
}
