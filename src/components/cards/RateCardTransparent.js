import React from 'react'

export default function RateCardTransparent({ className, title, info }) {
    return (
        <div className={className}>
            <div>
                <p className='cu-page-title fs-4 light-blue mb-4'>{title}</p>
                <ul className='font-size-1-1'>
                    {info.map(item =>
                        <li className='my-3'>{item.text}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
