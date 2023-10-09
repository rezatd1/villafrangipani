import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import leftArrow from '../../assets/img/right-arrow-10.webp';

export default function MobileNavbarChilds({ childs, onBackClick }) {
  const [transitionStatus, setTransitionStatus] = useState(false);
  if (childs.length <= 1) return null;

  const handleBackClick = () => {
    setTransitionStatus(true);
    setTimeout(() => onBackClick([]), 200);
  };

  return (
    <div className={`vw-100 vh-100 d-flex align-items-center ms-5 pb-5 ${!transitionStatus ? 'c-slide-start' : 'c-child-end'}`}>
      <div>
        <div className='text-white-50 mb-5 ms-2'>
          <img className='pb-1' src={leftArrow} alt='Left Arrow' />
          <a className='text-white-50 text-decoration-none' onClick={handleBackClick} href='#'>Back</a>
        </div>
        {childs.map((item, index) => (
          <div key={index} className='d-flex flex-column'>
            <Link to={item.route} className='mb-4 pb-1 text-white text-decoration-none'>{item.submenu}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}