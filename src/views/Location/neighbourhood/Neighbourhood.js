import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import PageHeader from '../../../components/pageHeader/PageHeader'
import MapSection from '../map/MapSection'
import Footer from '../../../components/footer/Footer'
import CopyRight from '../../../components/copyright/CopyRight'
import NeighbourhoodSection from './NeighbourhoodSection'

export default function Neighbourhood() {
    return (
        <div className='bg-light-golden overflow-hidden'>
            <Navbar />
            <PageHeader
                title='Our Neighbourhood'
                text='Pererenan is a quiet village, where local Balinese homes sit side by side with well established, larger villas.  Charming rice terraces sit in protected green zones,  with several rivers flowing through the village.  With a good mix of long term expatriates and locals, there are an excellent, varied range of restaurants, shops and services to be found on Jalan Pantai Pererenan, leading down to the beach which has amazing sunsets.   Below are some of our favourites.'
                titleClassName='light-blue'
                textClassName='' />
            <NeighbourhoodSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
