import React from 'react';
import footerResourses from '../../resources/FooterResources';
import { Link } from 'react-router-dom';

export default function MiddleFooter() {
    return (
        <div className='c-navigation-footer col-12 col-md-3 px-4 my-3'>
            <div>
                <div className='light-blue h4 mb-4'><strong>NAVIGATION</strong></div>
                <div className='row'>
                    {footerResourses.length > 1 ?
                        footerResourses.map(Item => <Link key={Item.id} to={Item.Route} className='col-6 font-size-1-1 mt-2 text-black text-decoration-none'>{Item.name}</Link>) : null
                    }
                </div>
            </div>
            <div className='mt-4 font-size-1-1 pe-4'>Villa Frangipani Canggu is a full service family villa with chef and large private pool and gardens. Options are available to rent 3 bedrooms or 4 bedrooms.</div>
        </div>
    )
}
