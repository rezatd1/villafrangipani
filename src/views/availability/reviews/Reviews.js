import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import Header from './Header';
import ReviewsSection from './ReviewsSection';
import MetaTag from '../../../components/metaTag/MetaTag';

export default function Reviews() {
    return (
        <div className='bg-light-golden'>
        <MetaTag PageTitle='Reviews' metaDescription='Villa Frangipani Reviews' />
            <Navbar />
            <Header />
            <ReviewsSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
