import React from 'react';
import logo from '../../assets/img/full-logo-footer.png';
import footerResourses from '../../resources/FooterResources';
import './Footer.scss';

export default function Footer() {
    return (
        <div className='row d-flex w-100 bg-light-blue py-5 justify-content-around'>
            <div className='c-logo-footer col-4 d-flex flex-column justify-content-center align-items-center'>
                <img src={logo} className='mb-5' />
                <div className='text-center mt-5'>Villa Frangipani, the family friendly villa in Pererenan Canggu, Bali</div>
            </div>
            <div className='c-navigation-footer col-3'>
                <div>
                    <div className='light-blue h4 mb-4'><strong>NAVIGATION</strong></div>
                    <div className='row'>
                        {footerResourses.length > 1 ?
                            footerResourses.map(Item => <div className='col-6 font-size-1-1 mt-2'>{Item}</div>) : null
                        }
                    </div>
                </div>
                <div className='mt-5 font-size-1-1'>Villa Frangipani Canggu is a full service family villa with chef and large private pool and gardens. Options are available to rent 3 bedrooms or 4 bedrooms.</div>
            </div>
            <div className='c-contact-footer col-4'>
                <div className='d-flex justify-content-between align-content-center'>
                    <div className='light-blue h4 ps-2'><strong>SIGN UP</strong></div>
                    <div className='pe-2'>
                        <i className="bi bi-facebook text-black h3"></i>
                        <i className="bi bi-instagram text-black h3 ps-4"></i>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='font-size-1-1'>Contact details  <span className='font-size-0-9 text-black-50'>(required)</span></div>
                    <div className='font-size-0-9 text-black-50 mt-3'>We respect your privacy</div>
                </div>
                <form>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                />
                            </div>
                        </div>
                        <div className='col-6'></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
