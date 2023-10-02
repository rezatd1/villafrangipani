import React from 'react';
import './Figure.scss';

export default function Figure() {
    return (
        <div className='bg-success row'>
            <div className='col-5 bg-info figure-img' style={{ background: `url(${'/assets/img/experience/family/villa_frangipani_canggu_river_pavilion_path_CX4023.png'})` }}></div>
            <div className='col-7 bg-danger'>
                <div className='p-5'>
                    <div className='cu-page-title light-blue h4 mb-5'>The Grounds</div>
                    <div className='font-size-1-1'>Villa Frangipani Canggu is great for families. The Villa’s 1500sqm of lawns and pool area provide ample space for play. In fact, you don’t need to worry about packing any of the usual cumbersome kids’ equipment for your stay.  We provide a baby bath, bath toys, pool toys, a potty, and baby chair.  Just let us know what you need and anything we don’t have in-house can be easily hired at minimal additional cost, such as pool gates.  For older children there are swimming pool toys, flippers, and a croquet set.

                        With three rooms in the main house, all on one level, wide doors to the bedrooms, and just a few steps down to the living pavilion, access and inclusion in all activities is easy for all ages at Villa Frangipani.</div>
                </div>
            </div>
        </div>
    )
}
