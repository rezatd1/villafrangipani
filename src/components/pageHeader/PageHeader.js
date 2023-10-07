import React from 'react'

export default function PageHeader({ title, text, titleClassName, textClassName }) {
    return (
        <div className='m-5'>
            <div className={`cu-font-thin h2 mb-4 ${titleClassName}`}>{title}</div>
            <div className={`font-size-1-1 ${textClassName}`}>{text}</div>
        </div>
    )
}
