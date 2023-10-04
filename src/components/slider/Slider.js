import React from 'react';
import BaseSlider from './BaseSlider';
import CommonHelper from '../../utilities/commonHelper/CommonHelper';

const Slider = ({ title, info, img, id }) => {
    return (
        <div className='row light-gray-bg px-2 px-lg-5 px-md-4 px-sm-2 py-3 py-lg-5 py-md-3 py-sm-3 my-4'>
            {CommonHelper.isMobileDevice() ?
                <>
                    <div className='col-12 col-lg-7 col-md-12 col-sm-7'>
                        <BaseSlider img={img} title={title} carouselId={`carousel${id}`} />
                    </div>
                    <div className='col-12 col-lg-5 col-md-12 col-sm-12'>
                        <div className='slider-title light-blue h4 mt-3'>{title}</div>
                        <div className='mt-4'>
                            <ul>
                                {info.map(item =>
                                    <li className='font-size-1-1 my-2'>{item.description}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className='col-12 col-lg-5 col-md-12 col-sm-12'>
                        <div className='slider-title light-blue h4 mt-3'>{title}</div>
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
                </>
            }

        </div>
    );
}

export default Slider;