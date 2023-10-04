import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import PageTitle from './PageTitle';
import Description from '../../../components/description/Description';
import SliderSection from './SliderSection';

export default function RoomsAndMore() {
    return (
        <div className='bg-light-golden'>
            <Navbar />
            <PageTitle />
            <Description />
            <SliderSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
