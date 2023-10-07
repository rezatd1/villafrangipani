import React from 'react';
import './galleryOne.scss';

export default function GalleryOne({ img, imgClassName, textContainerClass, title }) {
    return (
        <div style={{ background: `url(${img})` }} className={`gallery-one ${imgClassName}`}>
            <div className={`text-white ${textContainerClass}`}><span className='title-font'><strong>{title}</strong></span></div>
        </div>
    )
}
