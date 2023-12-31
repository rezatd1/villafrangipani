import React from 'react'
import CopyRight from '../../../components/copyright/CopyRight'
import Footer from '../../../components/footer/Footer'
import MetaTag from '../../../components/metaTag/MetaTag'
import Navbar from '../../../components/navbar/Navbar'
import PageHeader from '../../../components/pageHeader/PageHeader'
import NeighbourhoodSection from './NeighbourhoodSection'

export default function Neighbourhood() {
    return (
        <div className='bg-light-golden overflow-hidden'>
        <MetaTag PageTitle='Neighbourhood' metaDescription='Villa Frangipani Neighbourhood' />
            <Navbar />
            <PageHeader
                title='Our Neighbourhood'
                text='Pererenan is a quiet village, where local Balinese homes sit side by side with well established, larger villas.  Charming rice terraces sit in protected green zones,  with several rivers flowing through the village.  With a good mix of long term expatriates and locals, there are an excellent, varied range of restaurants, shops and services to be found on Jalan Pantai Pererenan, leading down to the beach which has amazing sunsets.   Below are some of our favourites.'
                titleClassName='light-blue font-size-2-1'
                textClassName='' />
            <NeighbourhoodSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
