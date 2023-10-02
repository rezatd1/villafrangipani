import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import PageMenu from './PageMenu';
import OurMenuResource from '../../../resources/OurMenuResources';
import MenuItems from './MenuItems';

export default function Menu() {
  const [activePage, setActivePage] = useState(1);

  useEffect(()=> {
    console.log(activePage)
  },[activePage])

  return (
    <div className='bg-light-golden'>
      <Navbar />
      <PageMenu resource={OurMenuResource[0]} activeMenu={activePage} setActiveMenu={setActivePage} />
      <MenuItems resource={OurMenuResource[activePage]} />
      <Footer />
      <CopyRight />
    </div>
  );
}