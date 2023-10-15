import React from 'react';
import './Figure.scss';
import CommonHelper from '../../utilities/commonHelper/CommonHelper';

export default function Figure({ title, text, img, desktopSize, mobileSize }) {
    return (
        <div className='row my-5 mx-3 mx-lg-5 mx-md-4 mx-sm-3'>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12 figure-img' style={{ background: `url(${img})`, height: `${CommonHelper.isMobileDevice() ? mobileSize : desktopSize}` }}></div>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12 px-0'>
                <div className='p-0 p-lg-5 p-md-0 p-sm-0 mt-3'>
                    <div className='cu-font-thin light-blue h4 mb-5'>{title}</div>
                    <div className='font-size-1-1'>{text}</div>
                </div>
            </div>
        </div>
    )
}
