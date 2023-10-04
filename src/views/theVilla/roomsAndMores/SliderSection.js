import React from 'react';
import Slider from '../../../components/slider/Slider';
import SliderResources from '../../../resources/SliderResources';
import RtlSlider from '../../../components/slider/RtlSlider';

export default function SliderSection() {
    return (
        <div className='mx-2 mx-lg-5 mx-md-3 mx-sm-2 row d-flex justify-content-center'>
            <div className='col-10'>
                <RtlSlider id={SliderResources[0].id} title={SliderResources[0].title} info={SliderResources[0].info} img={SliderResources[0].img} />
                <Slider id={SliderResources[1].id} title={SliderResources[1].title} info={SliderResources[1].info} img={SliderResources[1].img} />
                <RtlSlider id={SliderResources[2].id} title={SliderResources[2].title} info={SliderResources[2].info} img={SliderResources[2].img} />
                <Slider id={SliderResources[3].id} title={SliderResources[3].title} info={SliderResources[3].info} img={SliderResources[3].img} />
                <RtlSlider id={SliderResources[4].id} title={SliderResources[4].title} info={SliderResources[4].info} img={SliderResources[4].img} />
                <Slider id={SliderResources[5].id} title={SliderResources[5].title} info={SliderResources[5].info} img={SliderResources[5].img} />
            </div>
        </div>
    )
}
