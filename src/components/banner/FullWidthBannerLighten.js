import React from 'react';
import './banner.scss';

export default function FullWidthBannerLighten({ img }) {
    return (
        <div className=' full-banner-width-lighten mb-3' style={{ background: `url(${img})` }}>
        </div>
    )
}
