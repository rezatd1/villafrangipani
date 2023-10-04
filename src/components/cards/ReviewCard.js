import React from 'react';
import './ReviewCard.scss';

export default function ReviewCard({ className, title, text, author }) {
    return (
        <div className={`light-gray-bg review-card ${className}`}>
            <div className='p-3'>
                <div className='light-blue fw-bold fs-4 fst-italic mb-4 text-center'>{title}</div>
                <div className='text-center lh-lg'>{text}</div>
                <div className='text-center fw-bold mt-3'>{author}</div>
            </div>
        </div>
    )
}
