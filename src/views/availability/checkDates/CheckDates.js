import React from 'react';

import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CopyRight from '../../../components/copyright/CopyRight';
import Calendar from '../../../components/calendar/Calendar';
import MetaTag from '../../../components/metaTag/MetaTag';

export default function CheckDates() {
  return (
    <div className='d-flex flex-column'>
    <MetaTag PageTitle='Check Dates' metaDescription='Villa Frangipani Check Dates' />
      <Navbar />
      <Calendar />
      <Footer />
      <CopyRight />
    </div>
  )
}
