import React from 'react';
import BaseSlider from './BaseSlider';

const Slider = ({ title, info, img, id }) => {
    return (
        <div className='row light-gray-bg p-5 my-5'>
            <div className='col-12 col-lg-5 col-md-12 col-sm-12'>
                <div className='slider-title light-blue h4'>{title}</div>
                <div className='mt-4'>
                    <ul>
                        {info.map(item =>
                            <li className='font-size-1-1 my-2'>{item.description}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className='col-12 col-lg-7 col-md-12 col-sm-7'>
                <BaseSlider img={img} title={title} carouselId={`carousel${id}`} />
            </div>
        </div>
    );
}

export default Slider;