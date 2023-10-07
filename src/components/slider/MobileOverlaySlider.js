import React from 'react';
import DiningSliderResources from '../../resources/DiningSliderResources';

export default function MobileOverlaySlider({ img, className, title, text }) {
    return (
        <div>
            <div style={{ background: `url(${img})` }} className={className}></div>
            <div className='row d-flex justify-content-end mx-1'>
                <div className='light-gray-bg p-4 col-10 mobile-overlay-container-text'>
                    <div className='cu-font-thin light-blue h4'>{title}</div>
                    <div className='font-size-1 mt-2 mobile-overlay-text'>{text}</div>
                </div>
            </div>
        </div>
    )
}
