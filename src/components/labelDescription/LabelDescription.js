import React from 'react';

export default function LabelDescription({ key, icon, title, description }) {
    return (
        <div key={key} className='border-top row d-flex justify-content-between align-items-center mt-1 py-1'>
            <div className='col-3 font-size-1-1 d-flex'>
                <span class="material-icons middle-blue">{icon}</span>
                <span className='middle-blue fw-bold ms-1'>{title}</span>
            </div>
            <div className='col-8 font-size-1-1'>{description}</div>
        </div>
    )
}
