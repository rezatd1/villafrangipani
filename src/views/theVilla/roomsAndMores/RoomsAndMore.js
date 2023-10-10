import React from 'react';
import CopyRight from '../../../components/copyright/CopyRight';
import Description from '../../../components/description/Description';
import Footer from '../../../components/footer/Footer';
import MetaTag from '../../../components/metaTag/MetaTag';
import Navbar from '../../../components/navbar/Navbar';
import PageTitle from './PageTitle';
import SliderSection from './SliderSection';

export default function RoomsAndMore() {
    return (
        <div className='bg-light-golden'>
            <MetaTag PageTitle='Rooms And More' metaDescription='Rooms And More in Villa Frangipani' />
            <Navbar />
            <PageTitle />
            <Description />
            <SliderSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
