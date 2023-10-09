import React from 'react';
import Figure from '../../../components/figure/Figure';
import AttractionsResources from '../../../resources/AttractionsResources';
import MarginWidthBanner from '../../../components/banner/MarginWidthBanner';

export default function FigureSection() {
    return (
        <div>
            <div className='mx-2 mx-lg-5 mx-md-4 mx-sm-2'>
                {AttractionsResources[0].info.map(item =>
                    <div className='my-3'>
                        <Figure title={item.title} text={item.text} img={item.img} desktopSize='300px' mobileSize='300px' />
                    </div>)}
            </div>
            <div className='mx-2'>
                <MarginWidthBanner className='full-banner-width-fvh' img='/assets/img/location/attractions/villa_frangipani_canggu_attractions_beaches.webp' />
            </div>
            <div className='mx-2 mx-lg-5 mx-md-4 mx-sm-2'>
                {AttractionsResources[1].info.map(item =>
                    <div>
                        <Figure title={item.title} text={item.text} img={item.img} desktopSize='300px' mobileSize='300px' />
                    </div>
                )}
            </div>
        </div>

    )
}
