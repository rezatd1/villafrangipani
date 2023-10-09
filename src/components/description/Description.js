import React from 'react';
import './description.scss';
import img from '../../assets/img/home/Frangi+Carving+optimised.webp'

export default function Description() {
    return (
        <div className='row bg-light-golden px-4 font-size-1-1 mx-3 mt-4 mb-5'>
            <div className='col-12 col-lg-8 col-md-8 col-sm-12 description-text'> Guests enter through Balinese gates, walk across the fishponds into the main pavilion living area.  The owners have furnished the villa with a good balance of antique Indonesian furniture and artefacts, as well as more contemporary pieces and a small collection of South East Asian art.<br /><br />

                Fully renovated in 2023, the owners showcase beautiful local Balinese hand made tiles in the bathrooms and kitchen, as well as in the choice of dining ware and carvings, sculptures or shell art, throughout the villa.<br /><br />

                Four bedrooms comfortably accommodate a maximum of 10 guests. All bedrooms have an en-suite bathroom. With traditional, Balinese high ceilinged iron-wood roofs, and generous full-height doors or windows to the gardens, all bedrooms are bright and airy. There is also the option of renting just the main house of 3 bedrooms.<br /><br />

                The master bedroom and the river pavilion both have king and queen beds, with large garden bathrooms showcasing customised sandstone carvings, and outdoor rain showers and bathtubs.<br /><br />

                All bedrooms are fully airconditioned as well as providing fans and mosquito nets to ensure a comfortable nights rest.  The recent renovations included replacement of all pillows, mattresses, bedlinens and towels.  </div><br /><br />
            <img className='col-12 col-lg-4 col-md-4 col-sm-12 cu-description-img ms-2 ms-lg-0 ms-md-0 ms-sm-2 mt-2' src={img} />
        </div >
    )
}
