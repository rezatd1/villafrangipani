import React from 'react';
import './galleryOne.scss';

export default function GalleryOne({ img, imgClassName, textContainerClass, title }) {
    return (
        <div style={{ background: `url(${img})` }} className={`gallery-one ${imgClassName}`}>
            <div className={`bg-light-blue-08 position-absolute text-white col-lg-5 col-md-6 col-sm-7 col-7 ${textContainerClass}`}><span>{title}</span></div>
        </div>
    )
}
