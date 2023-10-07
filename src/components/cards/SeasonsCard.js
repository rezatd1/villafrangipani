import React from 'react'

export default function SeasonsCard({ className, title, info }) {
    return (
        <div className={`bg-light-blue d-flex flex-column justify-content-center align-content-center rounded-4 mb-4 pb-4 ${className}`}>
            <div className='cu-font-thin text-white fs-2 mt-4 mb-4 text-center'>{title}</div>
            {info.map(item =>
                <div key={item.id} className='text-center fw-bold cu-font-thin font-size-1-1 text-white my-1'>{item.text}</div>
            )}
        </div>
    )
}
