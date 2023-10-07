import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import PageMenu from './PageMenu';
import OurMenuResource from '../../../resources/OurMenuResources';
import MenuItems from './MenuItems';
import MetaTag from '../../../components/metaTag/MetaTag';

export default function Menu() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className='bg-light-golden'>
      <MetaTag PageTitle='Menu' metaDescription='Villa Frangipani menu' />
      <Navbar />
      <PageMenu resource={OurMenuResource[0]} activeMenu={activePage} setActiveMenu={setActivePage} />
      <MenuItems resource={OurMenuResource[activePage]} />
      <Footer />
      <CopyRight />
    </div>
  );
}