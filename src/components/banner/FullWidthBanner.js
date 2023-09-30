import React from 'react';
import './banner.scss';

export default function FullWidthBanner({ img }) {
    return (
        <div className='w-100 full-banner-width' style={{ background: `url(${img})` }}>
        </div>
    )
}
