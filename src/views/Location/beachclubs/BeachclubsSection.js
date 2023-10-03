import React from 'react';
import BeachclubsCard from '../../../components/cards/BeachclubsCard';
import BeachclubsResources from '../../../resources/BeachclubsResources';
import CommonHelper from '../../../utilities/commonHelper/CommonHelper';
import './Beachclubs.scss';


export default function BeachclubsSection() {
    return (
        <div className='mx-4 mx-lg-5 mx-md-5 mx-sm-4 d-flex justify-content-center align-items-center row'>
            {BeachclubsResources.map(item =>
                <BeachclubsCard key={item.id} containerClassName={CommonHelper.isMobileDevice() ? 'beachclubs-card-width-mobile' : 'beachclubs-card-width'} img={item.img} title={item.title} info1={item.info1} info2={item.info2} button={item.button} />
            )}
        </div>
    )
}
