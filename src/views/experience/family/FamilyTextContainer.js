import React from 'react';
import FigureResources from '../../../resources/FigureResources';

export default function FamilyTextContainer() {
    return (
        <div className='row my-5'>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
                <div className='p-0 p-lg-5 p-md-0 p-sm-0 mt-3'>
                    <div className='cu-page-title light-blue h4 mb-5'>{FigureResources[3].title}</div>
                    <div className='font-size-1-1'>{FigureResources[3].text}</div>
                </div>
            </div>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
                <div className='p-0 p-lg-5 p-md-0 p-sm-0 mt-3'>
                    <div className='cu-page-title light-blue h4 mb-5'>{FigureResources[4].title}</div>
                    <div className='font-size-1-1'>{FigureResources[4].text}</div>
                </div>
            </div>
            <div className='col-12 col-lg-12 col-md-12 col-sm-12'>
                <div className='p-0 p-lg-5 p-md-0 p-sm-0 mt-3'>
                    <div className='cu-page-title light-blue h4 mb-5'>{FigureResources[5].title}</div>
                    <div className='font-size-1-1'>{FigureResources[5].text}</div>
                </div>
            </div>
        </div>
    )
}
