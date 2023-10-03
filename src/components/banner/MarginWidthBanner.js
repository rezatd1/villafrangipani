import React from 'react';

export default function MarginWidthBanner({ className, img }) {
    return (
        <div className={`my-4 mx-0 mx-lg-4 mx-md-3 mx-sm-0 ${className}`} style={{ background: `url(${img})` }}>
        </div>
    )
}
