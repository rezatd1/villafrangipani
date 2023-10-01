import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import CopyRight from '../../../components/copyright/CopyRight'
import Title from './Title'
import MapImg from './MapImg'

export default function FloorPlan() {
    return (
        <div className='bg-light-golden'>
            <Navbar />
            <Title />
            <MapImg />
            <Footer />
            <CopyRight />
        </div>
    )
}
