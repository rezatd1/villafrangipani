import React from 'react';
import './Figure.scss';
import CommonHelper from '../../utilities/commonHelper/CommonHelper';

export default function RtlFigureDoubleText({ title1, text1, title2, text2, img, desktopSize, mobileSize }) {
    return (
        <div className='row my-5'>
            {CommonHelper.isMobileDevice() ? (
                <>
                    <div className='col-12 col-lg-5 col-md-12 col-sm-12 figure-img' style={{ background: `url(${img})`, height: `${CommonHelper.isMobileDevice() ? mobileSize : desktopSize}` }}></div>
                    <div className='col-12 col-lg-7 col-md-12 col-sm-12'>
                        <div className='p-3 p-lg-5 p-md-3 p-sm-3 mt-3 pb-0 pb-lg-0 pb-sm-0 pb-sm-2'>
                            <div className='cu-page-title light-blue h4 mb-4'>{title1}</div>
                            <div className='font-size-1-1'>{text1}</div>
                        </div>
                        <div className='p-3 p-lg-5 p-md-3 p-sm-3'>
                            <div className='cu-page-title light-blue h4 mb-4'>{title2}</div>
                            <div className='font-size-1-1'>{text2}</div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='col-12 col-lg-7 col-md-12 col-sm-12'>
                        <div className='p-3 p-lg-5 p-md-3 p-sm-3 mt-3 pb-0 pb-lg-0 pb-sm-0 pb-sm-2'>
                            <div className='cu-page-title light-blue h4 mb-4'>{title1}</div>
                            <div className='font-size-1-1'>{text1}</div>
                        </div>
                        <div className='p-3 p-lg-5 p-md-3 p-sm-3'>
                            <div className='cu-page-title light-blue h4 mb-4'>{title2}</div>
                            <div className='font-size-1-1'>{text2}</div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-5 col-md-12 col-sm-12 figure-img' style={{ background: `url(${img})`, height: `${CommonHelper.isMobileDevice() ? mobileSize : desktopSize}` }}></div>
                </>
            )}
        </div>
    );
}