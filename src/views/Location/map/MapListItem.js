import React from 'react';

export default function MapListItem({ key, title, text }) {
    return (
        <div key={key} className='d-flex justify-content-between mb-2'>
            <div className='font-size-1-1'>{title}</div>
            <div className='font-size-1-1'>{text}</div>
        </div>
    )
}
