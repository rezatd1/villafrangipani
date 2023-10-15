import React from 'react';
import Figure from '../../../components/figure/Figure';
import RtlFigure from '../../../components/figure/RtlFigure';
import FigureResources from '../../../resources/FigureResources';
import FamilyTextContainer from './FamilyTextContainer';
import FigureButton from './FigureButton';
import './Family.scss'

export default function FigureSection() {
    return (
        <div className='mx-5'>
            <Figure title={FigureResources[0].title} text={
                <>
                    Villa Frangipani Canggu is great for families. The Villa’s 1500sqm of lawns and pool area provide ample space for play. In fact, you don’t need to worry about packing any of the usual cumbersome kids’ equipment for your stay.  We provide a baby bath, bath toys, pool toys, a potty, and baby chair.  Just let us know what you need and anything we don’t have in-house can be easily hired at minimal additional cost, such as pool gates.  For older children there are swimming pool toys, flippers, and a croquet set.                        <br />

                    <div className='mt-4'>With three rooms in the main house, all on one level, wide doors to the bedrooms, and just a few steps down to the living pavilion, access and inclusion in all activities is easy for all ages at Villa Frangipani.</div>
                </>
            } img={FigureResources[0].img} desktopSize='100vh' mobileSize='300px' />
            <RtlFigure title={FigureResources[1].title} text={FigureResources[1].text} img={FigureResources[1].img} desktopSize='60vh' mobileSize='300px' />
            <Figure title={FigureResources[2].title} text={FigureResources[2].text} img={FigureResources[2].img} desktopSize='70vh' mobileSize='300px' />
            <FamilyTextContainer />
            <FigureButton />
        </div>
    )
}
