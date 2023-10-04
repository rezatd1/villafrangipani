import React from 'react';
import OverlaySlider from '../../../components/slider/OverlaySlider';
import DiningSliderResources from '../../../resources/DiningSliderResources';
import RtlOverlaySlider from '../../../components/slider/RtlOverlaySlider';
import './SldierSection.scss';

export default function SliderSection() {
    return (
        <div className='mx-5'>
            <div className='overlay-slider-section'>
                <OverlaySlider id={DiningSliderResources[0].id} img={DiningSliderResources[0].img} title={DiningSliderResources[0].title} text={DiningSliderResources[0].text} />
            </div>
            <div>
                <RtlOverlaySlider id={DiningSliderResources[1].id} img={DiningSliderResources[1].img} title={DiningSliderResources[1].title} text={DiningSliderResources[1].text} />
            </div>
        </div>
    )
}
