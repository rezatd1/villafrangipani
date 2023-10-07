import React from 'react';
import MapListItem from './MapListItem';
import MapItemResources from '../../../resources/MapItemResources';

export default function MapSection() {
    return (
        <div className='m-5 row d-flex justify-content-between'>
            <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
                <iframe src="https://www.google.com/maps/d/embed?mid=1YSjdJHODgMjL03Z5tf-J-zC_fs0WTUM&ehbc=2E312F" className='w-100' height="480"></iframe>
            </div>
            <div className='col-12 col-lg-5 col-md-12 col-sm-12 px-3 px-lg-5 px-md-3 px-sm-3 d-flex flex-column mt-4'>
                <div className='cu-font-thin light-blue h4'>Distances from Villa Frangipani Canggu</div>
                {MapItemResources.map(item =>
                    <MapListItem key={item.id} title={item.title} text={item.text} />
                )}
                <div className='light-blue h5'>Villa Frangipani Canngu</div>
                <div className='font-size-1-1'>Jl. Dalem Gede No.23, Pererenan, Kec. Mengwi, Kabupaten Badung, Bali 80351, Indonesia</div>
            </div>
        </div>
    )
}
