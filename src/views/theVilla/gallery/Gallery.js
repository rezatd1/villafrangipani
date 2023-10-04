import React from 'react';
import CopyRight from '../../../components/copyright/CopyRight';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import GallerySection from './GallerySection';

export default function Gallery() {
    return (
        <div className='light-gray-bg'>
            <Navbar />
            <div className='my-4'>
                <GallerySection />
            </div>
            <Footer />
            <CopyRight />
        </div>
    )
}
