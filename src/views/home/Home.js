import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import CopyRight from '../../components/copyright/CopyRight';
import GalleryOne from '../../components/galley/GalleryOne';
import HomeResourses from '../../resources/HomeResources';
import AboutResources from '../../resources/AboutResources';
import BannerResources from '../../resources/BannerResources';
import About from '../../components/about/About';
import GallerySection from './GallerySection';
import './home.scss';
import FullWidthBanner from '../../components/banner/FullWidthBanner';
import QuickFacts from './QuickFacts';

export default function Home() {
    return (
        <div className='bg-light-golden'>
            <Navbar />
            <GalleryOne img={HomeResourses[0].img}
                imgClassName={HomeResourses[0].imgClassName}
                textContainerClass={HomeResourses[0].textContainerClass}
                title={HomeResourses[0].title} />
            <About img={AboutResources[0].img}
                title={AboutResources[0].title}
                about={AboutResources[0].about} />
            <GallerySection />
            <FullWidthBanner img={BannerResources[0].bannerImg} />
            <QuickFacts />
            <FullWidthBanner img={BannerResources[1].bannerImg} />
            <Footer />
            <CopyRight />
        </div>
    )
}
