import React from 'react';
import QuickFactsResources from '../../resources/QuickFactsResources';
import LabelDescription from '../../components/labelDescription/LabelDescription';

export default function QuickFacts() {
  return (
    <div className='bg-light-golden px-5 pt-4 pb-5'>
      <div className='px-lg-5 px-md-5 px-sm-0 px-0 row'>
        <div className='col-12 col-lg-3 col-md-12 col-sm-12 cu-font-thin light-blue h4 cu-font-thin mb-4'>Quick Facts</div>
        <div className='col-12 col-lg-9 col-md-12 col-sm-12'>
          {QuickFactsResources.map(item =>
            <LabelDescription key={item.id} icon={item.icon} title={item.title} description={item.description} />)}
        </div>
      </div>
    </div>
  )
}
