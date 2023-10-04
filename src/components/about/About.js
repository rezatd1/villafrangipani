import React from 'react';
import './About.scss';
import CommonHelper from '../../utilities/commonHelper/CommonHelper';

export default function About({ img, title, about }) {
  return (
    <div className='bg-light-golden py-5 w-100 px-2'>
      <div className='my-2 px-0 px-lg-5 px-md-2 px-sm-0 mt-3'>
        <div className='light-blue h2 fw-bold px-4 mx-2'>{title}</div>
        <div className='row d-flex justify-content-center px-2 mt-4'>
          <div className='col-11 col-lg-5 col-md-5 col-sm-12 img-container' style={{ background: `url(${img})`, minHeight: '350px' }}>
          </div>
          <div className={`col-12 col-lg-6 col-md-6 col-sm-12 mx-4 lh-lg mt-3 mt-lg-0 mt-md-0 mt-sm-3 ${CommonHelper.isMobileDevice() ? 'font-size-1' : 'font-size-1-1'}`}>
            {about}
          </div>
        </div>
      </div>
    </div >
  )
}
