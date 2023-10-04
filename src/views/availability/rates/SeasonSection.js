import React from 'react';
import RateCard from '../../../components/cards/RateCard';
import RateResources from '../../../resources/RatesResources';
import SeasonsCard from '../../../components/cards/SeasonsCard';
import CommonHelper from '../../../utilities/commonHelper/CommonHelper';
import RateCardTransparent from '../../../components/cards/RateCardTransparent';

export default function SeasonSection() {
    return (
        <div className='mx-3 mx-lg-5 mx-md-3 mx-sm-3 row d-flex justify-content-center'>
            {RateResources.slice(0, 3).map(item =>
                <RateCard className={CommonHelper.isMobileDevice() ? 'col-12' : 'col-3'} title={item.title} info={item.info} />
            )}
            <div className='row d-flex justify-content-center'>
                <SeasonsCard className={CommonHelper.isMobileDevice() ? 'col-12' : 'col-4'} title={RateResources[3].title} info={RateResources[3].info} />
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column row'>
                <p className='font-size-1-1 text-center col-lg-6 col-md-8 col-sm-10'>Above Rates are quoted in US Dollars per night and are subject to 15.5% tax & service charge. Rates are valid until 31 March, 2024 </p>
                <p className='font-size-1-1 text-center mt-2 col-lg-6 col-md-8 col-sm-10'>Discounts for stays of 14 or more nights: 10%</p>
            </div>
            <div className='row d-flex justify-content-center my-4'>
                <RateCardTransparent className={CommonHelper.isMobileDevice() ? 'col-12' : 'col-7'} title={RateResources[4].title} info={RateResources[4].info}/>
            </div>
        </div>
    )
}