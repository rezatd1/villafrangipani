import React from 'react';
import logo from '../../assets/img/full-logo-footer.webp';
import footerResourses from '../../resources/FooterResources';
import './Footer.scss';
import LeftFooter from './LeftFooter';
import MiddleFooter from './MiddleFooter';
import RightFooter from './RightFooter';

export default function Footer() {
    return (
        <div className='d-flex w-100 light-gray-bg py-5 justify-content-around flex-wrap'>
            <LeftFooter />
            <MiddleFooter />
            <RightFooter />
        </div>
    )
}