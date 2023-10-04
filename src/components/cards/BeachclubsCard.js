import React from 'react';
import './BeachclubsCard.scss';

export default function BeachclubsCard({ key, containerClassName, img, title, info1, info2, button, buttonHref }) {
    return (
        <div key={key} className={`light-gray-bg my-5 mx-2 ${containerClassName}`}>
            <div className='py-4 py-lg-5 py-md-5 py-sm-5 px-3 px-lg-4 px-md-4 px-sm-3 d-flex justify-content-center align-items-center flex-column'>
                <div className='w-100 beachclubs-card-img' style={{ background: `url(${img})` }}></div>
                <div className='light-blue fw-bold fs-4 mt-4 mb-3'>{title}</div>
                <div className='text-center font-size-1 px-3 px-lg-5 px-md-5 px-sm-3'>{info1}</div>
                <div className='text-center font-size-1 px-3 px-lg-5 px-md-5 px-sm-3 my-4'>{info2}</div>
                <button type="button" class="btn bg-light-blue font-size-1 text-white py-3 px-5 my-3"><a className='text-decoration-none text-white' href={buttonHref}>{button}</a></button>
            </div>
        </div>
    )
}
