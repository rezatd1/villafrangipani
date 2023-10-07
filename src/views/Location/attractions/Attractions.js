import React from 'react';
import MarginWidthBanner from '../../../components/banner/MarginWidthBanner';
import '../../../components/banner/banner.scss';
import CopyRight from '../../../components/copyright/CopyRight';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import PageHeader from '../../../components/pageHeader/PageHeader';
import FigureSection from './FigureSection';

export default function Attractions() {
    return (
        <div className='bg-light-golden overflow-hidden'>
            <Navbar />
            <MarginWidthBanner className='full-banner-width' img='/assets/img/location/villa_frangipani_changgu_tegallalang,_rice_terraces.jpg' />
            <PageHeader
                title='Exploring Bali Attractions'
                text="Explore Bali's stunning landscapes and cultural sites, including Uluwatu Temple, Tegalalang Rice Terraces, Mount Batur, and Lempuyang Temple. Surf the island's legendary breaks and trek to Nusa Penida's hidden beaches."
                titleClassName='light-blue font-size-2-1'
                textClassName='' />
            <FigureSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
