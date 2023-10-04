import React from 'react';
import './About.scss';

export default function About({ img, title, about }) {
  return (
    <div className='bg-light-golden py-5 w-100 px-2'>
      <div className='my-2 px-5 mt-3'>
        <div className='light-blue h2 fw-bold px-4 mx-2'>{title}</div>
        <div className='row d-flex justify-content-center px-5 mt-4'>
          <div className='col-lg-6 col-md-5 col-sm-12 col-12 img-container px-lg-5 px-md-4 px-sm-0' style={{ background: `url(${img})`, minHeight: '350px' }}>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 text-container px-lg-5 px-md-4 px-sm-0 mt-sm-3'>
            {about}
          </div>
        </div>
      </div>
    </div >
  )
}
