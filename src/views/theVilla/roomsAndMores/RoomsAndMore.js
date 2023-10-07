import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import PageTitle from './PageTitle';
import Description from '../../../components/description/Description';
import SliderSection from './SliderSection';
import { Helmet } from 'react-helmet';
import MetaTag from '../../../components/metaTag/MetaTag';

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
