import React from 'react';
import './galleryTwo.scss';

export default function GalleryTwo({ key, img, title }) {
  return (
    <div key={key} className='mx-2 d-inline-block my-3 gallery-two-block'>
      <img alt={title} className='gallery-two-img d-flex mb-4 pb-2 w-100' src={img} />
      <p className='bg-light-blue p-4 text-white w-50 d-inline h6'>{title}</p>
    </div>
  )
}
