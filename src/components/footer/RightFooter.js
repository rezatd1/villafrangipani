import React from 'react'
import FormGroup from './FormGroup'

export default function RightFooter() {
    return (
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
                    <FormGroup className='col-6'
                        htmlFor="firstName"
                        labelClassName='mb-1'
                        label='First Name'
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholde='Enter your first name' />
                    <FormGroup className='col-6'
                        htmlFor="lastName"
                        labelClassName='mb-1'
                        label='Last Name'
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholde='Enter your last name' />
                    <FormGroup className='col-12 mt-3'
                        htmlFor="email"
                        labelClassName='text-black-50'
                        label='Email (required)'
                        type='email'
                        id='email'
                        name='email'
                        placeholde='Enter your email address' />
                </div>
                <div className='row'>
                    <button type="button" className="btn bg-light-blue text-white py-3 mt-3 col-6 ms-1">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}
