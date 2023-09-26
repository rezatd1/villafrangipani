import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../assets/img/left-arrow-10.png'

export default function MobileNavbarItem({ className, linkClassName, name, imgClassName }) {
    return (
        <div className={className}>
            <Link className={linkClassName} >{name}</Link>
            <img className={imgClassName} src={Icon}></img>
        </div>)
}
