import React from 'react';
import './menu.scss';
import OurMenuResource from '../../../resources/OurMenuResources';

export default function PageMenu({ resource, activeMenu, setActiveMenu }) {
    const handleMenuClick = (itemId) => {
        setActiveMenu(itemId);
    };

    return (
        <div className='cu-font-thin d-flex justify-content-center align-items-center flex-column py-4'>
            <div className='font-size-2-1 cu-font-thin'>Our Menu</div>
            <div className='h5 header-menu text-dark mt-4  d-flex flex-wrap justify-content-center align-items-center px-4 mx-3 px-lg-5 px-md-5 px-sm-5 mx-lg-5 mx-md-0 mx-sm-3'>
                {resource.info.map((item) => (
                    <span
                        className={(item.id - 1) === activeMenu ? 'text-decoration-underline text-center px-1 lh-base font-open-sans h4' : 'px-1 lh-base font-open-sans h4'}
                        onClick={() => handleMenuClick(item.id - 1)}
                        key={item.id}>
                        {item.text}
                    </span>
                ))}
            </div>
        </div>
    );
}