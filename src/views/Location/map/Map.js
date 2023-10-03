import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import PageHeader from '../../../components/pageHeader/PageHeader';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import MapSection from './MapSection';

export default function Map() {
    return (
        <div className='bg-light-golden overflow-hidden'>
            <Navbar />
            <PageHeader
                title='Easy access to the beaches of Canggu, and a wide range of restaurants, shops and services'
                text={
                    <>
                        On the map below, Villa Frangipanis location is marked in blue. The green markers represent the large variety of restaurants, shops and services that we like and encourage you to try. The orange markers are the beaches, and the brown markers the beach clubs. For more details on our favourite shops and restaurants, please view{' '}
                        <a className='light-blue' href='#'>Our Neighbourhood.</a>
                    </>
                }
                titleClassName='light-blue'
                textClassName=''
            />
            <MapSection />
            <Footer />
            <CopyRight />
        </div>
    );
}