import React from 'react'
import FullWidthBannerLighten from '../../../components/banner/FullWidthBannerLighten'
import CopyRight from '../../../components/copyright/CopyRight'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import HeaderSection from './HeaderSection'
import BeachclubsSection from './BeachclubsSection'
import MetaTag from '../../../components/metaTag/MetaTag'

export default function Beachclubs() {
    return (
        <div className='bg-light-golden overflow-hidden'>
        <MetaTag PageTitle='Beach Clubs' metaDescription='Villa Frangipani Beach Clubs' />
            <Navbar />
            <FullWidthBannerLighten img='/assets/img/experience/beachclubs/beach-clubs-in-bali.jpg' />
            <HeaderSection />
            <BeachclubsSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
