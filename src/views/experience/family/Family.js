import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import FigureSection from './FigureSection';

export default function Family() {
    return (
        <div className='bg-light-golden'>
            <Navbar />
            <FigureSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
