import React from 'react'
import FormGroup from '../../components/footer/FormGroup'

export default function FormSection() {
    return (
        <div>
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
        </div>
    )
}
