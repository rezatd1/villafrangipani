import React from 'react';
import CopyRight from '../../../components/copyright/CopyRight';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import GallerySection from './GallerySection';

export default function Gallery() {
    return (
        <div>
            <Navbar />
            <GallerySection />
            <Footer />
            <CopyRight />
        </div>
    )
}
