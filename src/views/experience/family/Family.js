import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import FigureSection from './FigureSection';
import MetaTag from '../../../components/metaTag/MetaTag';

export default function Family() {
    return (
        <div className='bg-light-golden'>
            <MetaTag PageTitle='Family' metaDescription='Villa Frangipani Family' />
            <Navbar />
            <FigureSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
