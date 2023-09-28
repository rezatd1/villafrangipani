import React from 'react';
import logo from '../../assets/img/full-logo-footer.png';
import footerResourses from '../../resources/FooterResources';
import './Footer.scss';

export default function Footer() {
    return (
        <div className='d-flex w-100 light-gray-bg py-5 justify-content-around flex-wrap'>
            <div className='c-logo-footer col-12 col-md-4 d-flex flex-column justify-content-center align-items-center px-3'>
                <img src={logo} className='mb-5' />
                <div className='text-center mx-3'>Villa Frangipani, the family friendly villa in Pererenan Canggu, Bali</div>
            </div>
            <div className='c-navigation-footer col-12 col-md-3 px-4 my-3'>
                <div>
                    <div className='light-blue h4 mb-4'><strong>NAVIGATION</strong></div>
                    <div className='row'>
                        {footerResourses.length > 1 ?
                            footerResourses.map(Item => <div className='col-6 font-size-1-1 mt-2'>{Item}</div>) : null
                        }
                    </div>
                </div>
                <div className='mt-4 font-size-1-1 pe-4'>Villa Frangipani Canggu is a full service family villa with chef and large private pool and gardens. Options are available to rent 3 bedrooms or 4 bedrooms.</div>
            </div>
            <div className='c-contact-footer col-12 col-md-4 me-3 mt-3 px-4'>
                <div className='d-flex justify-content-between align-content-center'>
                    <div className='light-blue h4'><strong>SIGN UP</strong></div>
                    <div className='pe-2'>
                        <i className="bi bi-facebook text-black h3"></i>
                        <i className="bi bi-instagram text-black h3 ps-4"></i>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='font-size-1-1'>Contact details  <span className='font-size-0-9 text-black-50'>(required)</span></div>
                    <div className='font-size-0-9 text-black-50 mt-2 mb-3'>We respect your privacy</div>
                </div>
                <form className='px-2'>
                    <div className='row'>
                        <div className='col-6 px-1'>
                            <div className="form-group">
                                <label htmlFor="firstName" className='font-size-0-9 mb-1'>First Name</label>
                                <input
                                    type="text"
                                    className="form-control rounded-0 border border-2 m-0"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                />
                            </div>
                        </div>
                        <div className='col-6 px-1'>
                            <div className="form-group">
                                <label htmlFor="lastName" className='font-size-0-9 mb-1'>First Name</label>
                                <input
                                    type="text"
                                    className="form-control rounded-0 border border-2 m-0"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter your Last name"
                                />
                            </div>
                        </div>
                        <div className='col-12 px-1 mt-3'>
                            <div className="form-group">
                                <label htmlFor="email" className='mb-1'>Email <span className='font-size-0-9 text-black-50'>(required)</span></label>
                                <input
                                    type="email"
                                    className="form-control rounded-0 border border-2 m-0"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <button type="button" className="btn bg-light-blue text-white py-3 mt-3 col-6 ms-1">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}