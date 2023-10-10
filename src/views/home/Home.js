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
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <div className='bg-light-golden'>
            <Helmet>
                <title>Villa Frangipani Canggu</title>
                <meta name="description" content="Frangipani, your private villa in Canggu, Bali." />
            </Helmet>
            <Navbar />
            <GalleryOne img={HomeResourses[0].img}
                imgClassName='main-banner-height row col-12 mx-0'
                textContainerClass={HomeResourses[0].textContainerClass}
                title={HomeResourses[0].title} />
            <About
                img={AboutResources[0].img}
                title={AboutResources[0].title}
                about={
                    <>
                        Welcome to Villa Frangipani Canggu, your private villa in Canggu, Bali. This exquisite 4 bedroom villa, including a 3 bedroom main villa and a separate river pavilion, is nestled on the edge of the serene Pangi river, in the tranquil rural village of Pererenan. Surrounded by towering trees and lush gardens, our villa offers a peaceful retreat while being conveniently located near top-notch restaurants and prime surfing beaches.
                        <br />
                        
                       <div className='mt-2'>Villa Frangipani Canggu, a villa with a private pool in Canggu, was designed and constructed by the esteemed group behind the Four Seasons Bali. Following an extensive renovation in 2023, it now offers guests the unique opportunity to experience the charming design of a traditional open-plan Balinese home, complete with all the luxuries and amenities of a modern villa. With spacious living and dining areas opening onto a 15-meter salt chlorinated infinity edge pool, and a villa with a chef in Canggu, Bali, we offer unmatched hospitality and a home away from home experience.</div>
                    </>
                }
            />

            <GallerySection />
            <FullWidthBanner img={BannerResources[0].bannerImg} />
            <QuickFacts />
            <FullWidthBanner img={BannerResources[1].bannerImg} />
            <Footer />
            <CopyRight />
        </div>
    )
}
