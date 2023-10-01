import React from 'react';
import './slider.scss';

export default function RtlOverlaySlider({ id, img, title, text }) {
    return (
        <div key={id} className='row d-flex justify-content-start my-5 flex-nowrap rtl-overlay-slider'>
            <div className='col-5'>
                <div className='light-gray-bg rtl-text-container p-5 w-100'>
                    <div className='cu-page-title light-blue h4 overlay-title'>{title}</div>
                    <div className='font-size-1-1 mt-5 overlay-text'>{text}</div>
                </div>
            </div>
            <div className='col-7 rtl-overlay-img' style={{ background: `url(${img})` }}></div>
        </div>
    )
}
