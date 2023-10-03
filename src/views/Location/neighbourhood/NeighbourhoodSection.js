import React from 'react';
import NeighbourhoodSectionResources from '../../../resources/neighbourhoodSection';

export default function NeighbourhoodSection() {
    return (
        <div className='mx-5'>
            {NeighbourhoodSectionResources.map(item => (
                <div key={item.id} className='my-5'>
                    <div className='cu-page-title light-blue h4 mb-5'>{item.category}</div>
                    <div className='font-size-1-1'>{item.categoryDetails}</div>
                    {item.Info.map(info => (
                        <div key={info.id} className='my-4'>
                            <span className='light-blue font-size-1-1'>{info.name}</span>
                            <p className='font-size-1-1 d-inline'> - {info.text}</p>
                            <a href={info.linkHref} className='light-blue fs-5'>{info.linkName}</a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}