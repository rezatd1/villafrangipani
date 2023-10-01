import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import Title from './Title';
import SliderSection from './SliderSection';

export default function Dining() {
    return (
        <div className='bg-light-golden'>
            <Navbar />
            <Title />
            <SliderSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
