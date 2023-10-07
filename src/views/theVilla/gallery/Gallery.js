import React from 'react';
import CopyRight from '../../../components/copyright/CopyRight';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import GallerySection from './GallerySection';
import MetaTag from '../../../components/metaTag/MetaTag';

export default function Gallery() {
    return (
        <div className='light-gray-bg'>
            <MetaTag PageTitle='Gallery' metaDescription='Villa Frangipani Gallery' />
            <Navbar />
            <div className='my-4'>
                <GallerySection />
            </div>
            <Footer />
            <CopyRight />
        </div>
    )
}
