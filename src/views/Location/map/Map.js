import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import PageHeader from '../../../components/pageHeader/PageHeader';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import MapSection from './MapSection';
import { Link } from 'react-router-dom';
import MetaTag from '../../../components/metaTag/MetaTag';

export default function Map() {
    return (
        <div className='bg-light-golden overflow-hidden'>
        <MetaTag PageTitle='Map' metaDescription='Villa Frangipani Map' />
            <Navbar />
            <PageHeader
                title='Easy access to the beaches of Canggu, and a wide range of restaurants, shops and services'
                text={
                    <>
                        On the map below, Villa Frangipanis location is marked in blue. The green markers represent the large variety of restaurants, shops and services that we like and encourage you to try. The orange markers are the beaches, and the brown markers the beach clubs. For more details on our favourite shops and restaurants, please view{' '}
                        <Link className='light-blue' to='/location/neighbourhood'>Our Neighbourhood.</Link>
                    </>
                }
                titleClassName='light-blue font-size-2-1'
                textClassName=''
            />
            <MapSection />
            <Footer />
            <CopyRight />
        </div>
    );
}