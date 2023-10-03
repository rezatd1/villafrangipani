import React from 'react';
import './banner.scss';

export default function FullWidthBanner({ img }) {
    return (
        <div className=' full-banner-width mb-3' style={{ background: `url(${img})` }}>
        </div>
    )
}
