import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import CopyRight from '../../../components/copyright/CopyRight'
import PageHeader from '../../../components/pageHeader/PageHeader'
import SeasonSection from './SeasonSection'

export default function Rates() {
    return (
        <div className='bg-light-golden'>
            <Navbar />
            <PageHeader title='Rates' titleClassName='light-blue d-flex justify-content-center font-size-2-1' />
            <SeasonSection />
            <Footer />
            <CopyRight />
        </div>
    )
}
