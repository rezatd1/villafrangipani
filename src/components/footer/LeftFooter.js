import React from 'react';
import logo from '../../assets/img/full-logo-footer.webp';

export default function LeftFooter() {
    return (
        <div className='c-logo-footer col-12 col-md-4 d-flex flex-column justify-content-center align-items-center px-3'>
            <img src={logo} alt='villa frangipani logo' className='mb-5' />
            <div className='text-center mx-3'>Villa Frangipani, the family friendly villa in Pererenan Canggu, Bali</div>
        </div>
    )
}
