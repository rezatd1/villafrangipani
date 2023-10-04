import React from 'react';

export default function RateCard({ className, title, info }) {
    return (
        <div className={`light-gray-bg mx-1 rounded-4 mb-3 ${className}`}>
            <div className='cu-page-title light-blue ps-2 pt-4 fs-4 mb-5'>{title}</div>
            <ul className='font-size-1-1 ps-5 pb-2'>
                {info.map(item =>
                    <li key={item.id} className='my-1 font-size-1-1'>{item.text}</li>
                )}
            </ul>
        </div>
    )
}
