import React from 'react';
import BaseSlider from './BaseSlider';

const Slider = () => {
    return (
        <div className='row light-gray-bg p-5'>
            <div className='col-12 col-lg-5 col-md-5 col-sm-12'>
                <div className='slider-title light-blue h4'>Junior Bedroom</div>
                <div className='mt-4'>
                    <ul>
                        <li className='font-size-1-1 my-2'>Two super-single beds which can be joined to make a super king bed</li>
                        <li className='font-size-1-1 my-2'>Direct access to garden and swimming pool through large full height sliding glass doors</li>
                        <li className='font-size-1-1 my-2'>Ensuite bathroom with luxurious bathtub and rainshower</li>
                        <li className='font-size-1-1 my-2'>Bluetooth JBL speaker, room safe, hair dryer</li>
                        <li className='font-size-1-1 my-2'>Mosquito netting, blackout curtains</li>
                        <li className='font-size-1-1 my-2'>Air-conditioning and ceiling fan</li>
                    </ul>
                </div>
            </div>
            <div className='col-12 col-lg-7 col-md-7-col-sm-7'>
                <BaseSlider />
            </div>
        </div>
    );
}

export default Slider;