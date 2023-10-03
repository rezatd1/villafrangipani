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
            <PageHeader />
            {StaffResources.map(item =>
                <RtlFigureDoubleText title1={item.title1} text1={item.text1} title2={item.title2} text2={item.text2} img={item.img} desktopSize='60vh' mobileSize='300px' />
            )}
            <Footer />
            <CopyRight />
        </div>
    )
}
