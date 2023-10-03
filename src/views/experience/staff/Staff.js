import React from 'react';
import FullWidthBanner from '../../../components/banner/FullWidthBanner';
import CopyRight from '../../../components/copyright/CopyRight';
import RtlFigureDoubleText from '../../../components/figure/RtlFigureDoubleText';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import PageHeader from '../../../components/pageHeader/PageHeader';
import StaffResources from '../../../resources/StaffResource';

export default function Staff() {
    return (
        <div className='bg-light-golden overflow-hidden'>
            <Navbar />
            <FullWidthBanner img='/assets/img/experience/staff/villa_frangipani_canggu_staff_CX4454.png' />
            <PageHeader title='Villa Frangipani Staff'
                text='One of the greatest benefits of staying at Villa Frangipani Canggu is the personalised service provided by our team of long serving, dedicated staff. Villa Frangipani’s staff have been professionally trained and will do their utmost to please with their warm and friendly Balinese hospitality.'
                titleClassName='text-black'
                textClassName=''
            />
            {StaffResources.map(item =>
                <RtlFigureDoubleText title1={item.title1} text1={item.text1} title2={item.title2} text2={item.text2} img={item.img} desktopSize='60vh' mobileSize='300px' />
            )}
            <Footer />
            <CopyRight />
        </div>
    )
}
