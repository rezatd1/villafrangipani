import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import Title from './Title';
import SliderSection from './SliderSection';
import MetaTag from '../../../components/metaTag/MetaTag';

export default function Dining() {
    return (
        <div className='bg-light-golden'>
            <MetaTag PageTitle='Dining' metaDescription='Dining in Villa Frangipani' />
            <Navbar />
            <Title />
            <SliderSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
