import React from 'react';

import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';

export default function CheckDates() {
  return (
    <div className='d-flex flex-column'>
      <Navbar />
      <Footer />
      <CopyRight />
    </div>
  )
}
