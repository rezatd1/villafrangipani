import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import CopyRight from '../../../components/copyright/CopyRight'
import Title from './Title'
import MapImg from './MapImg'
import MetaTag from '../../../components/metaTag/MetaTag'

export default function FloorPlan() {
    return (
        <div className='bg-light-golden'>
            <MetaTag PageTitle='Floor Plan' metaDescription='Villa Frangipani Floorplan' />
            <Navbar />
            <Title />
            <MapImg />
            <Footer />
            <CopyRight />
        </div>
    )
}
