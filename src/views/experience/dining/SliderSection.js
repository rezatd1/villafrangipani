import React from 'react';
import OverlaySlider from '../../../components/slider/OverlaySlider';
import DiningSliderResources from '../../../resources/DiningSliderResources';
import RtlOverlaySlider from '../../../components/slider/RtlOverlaySlider';
import './SldierSection.scss';
import MobileOverlaySlider from '../../../components/slider/MobileOverlaySlider';
import CommonHelper from '../../../utilities/commonHelper/CommonHelper';

export default function SliderSection() {
    return (
        <div className='mx-2 mx-lg-5 mx-md-3 mx-sm-2'>
            <div className='overlay-slider-section'>
                {CommonHelper.isMobileDevice() ?
                    <MobileOverlaySlider id={DiningSliderResources[0].id} className={DiningSliderResources[0].className} img={DiningSliderResources[0].img} title={DiningSliderResources[0].title} text={
                        <>
                            Our full time, in house Chef, Chef Wayan, delights in preparing cuisine from all corners of the world, including Indonesian, Italian, modern Australian and Thai.
                            <br />
                            <div className='mt-3'>Whether you would like to try our signature dishes, a BBQ or just want a homemade crispy pizza (we have a specialised pizza oven and charcoal BBQ), Chef Wayan can work with you to craft the meals you wish for.</div>
                            <div className='mt-3'>Villa Frangipani Canggu offers a suggestion menu featuring Asian and international dishes to cater to all tastes with an excellent selection of vegetarian and children’s options.</div>
                            <div className='mt-3'>Guests can look forward to some wonderful fresh fish and locally harvested Bali produce.
                            </div>

                        </>
                    } />
                    : <OverlaySlider id={DiningSliderResources[0].id} img={DiningSliderResources[0].img} title={DiningSliderResources[0].title} text={
                        <>
                            Our full time, in house Chef, Chef Wayan, delights in preparing cuisine from all corners of the world, including Indonesian, Italian, modern Australian and Thai.
                            <br />
                            <div className='mt-3'>Whether you would like to try our signature dishes, a BBQ or just want a homemade crispy pizza (we have a specialised pizza oven and charcoal BBQ), Chef Wayan can work with you to craft the meals you wish for.</div>
                            <div className='mt-3'>Villa Frangipani Canggu offers a suggestion menu featuring Asian and international dishes to cater to all tastes with an excellent selection of vegetarian and children’s options.</div>
                            <div className='mt-3'>Guests can look forward to some wonderful fresh fish and locally harvested Bali produce.
                            </div>

                        </>
                    } />
                }
            </div>
            <div>
                {CommonHelper.isMobileDevice() ?
                    <MobileOverlaySlider id={DiningSliderResources[1].id} className={DiningSliderResources[1].className} img={DiningSliderResources[1].img} title={DiningSliderResources[1].title} text={
                        <>
                            It is highly recommended that guests meet with the villa manager and cook at the start of their stay to discuss food likes and dislikes, special dietary needs and meal schedules.
                            <br />
                            <div className='mt-3'>It is a good idea to plan meals the evening before. Groceries and beverages are charged at cost price. </div>
                            <div className='mt-3'>Guests will be requested to provide grocery money in advance and the staff will do the shopping for you and keep the receipts for your reference.</div>
                        </>
                    }  />
                    : <RtlOverlaySlider id={DiningSliderResources[1].id} img={DiningSliderResources[1].img} title={DiningSliderResources[1].title} text={
                        <>
                            It is highly recommended that guests meet with the villa manager and cook at the start of their stay to discuss food likes and dislikes, special dietary needs and meal schedules.
                            <br />
                            <div className='mt-3'>It is a good idea to plan meals the evening before. Groceries and beverages are charged at cost price. </div>
                            <div className='mt-3'>Guests will be requested to provide grocery money in advance and the staff will do the shopping for you and keep the receipts for your reference.</div>
                        </>
                    } />
                }
            </div>
        </div>
    )
}
