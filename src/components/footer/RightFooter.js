import React, { useState } from 'react';
import FormGroup from './FormGroup';

export default function RightFooter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(formData);
  };

  const sendEmail = (formData) => {
    const subject = 'New Form Submission';
    const body = `First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AEmail: ${formData.email}`;
    const mailtoUrl = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className='c-contact-footer col-12 col-md-4 me-3 mt-3 px-4'>
      {/* Rest of the component */}
      <form className='px-2' onSubmit={handleSubmit}>
        <div className='row'>
          <FormGroup
            className='col-6'
            htmlFor="firstName"
            labelClassName='mb-1'
            label='First Name'
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Enter your first name'
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <FormGroup
            className='col-6'
            htmlFor="lastName"
            labelClassName='mb-1'
            label='Last Name'
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Enter your last name'
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <FormGroup
            className='col-12 mt-3'
            htmlFor="email"
            labelClassName='text-black-50'
            label='Email (required)'
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email address'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='row'>
          <button type="submit" className="btn bg-light-blue text-white py-3 mt-3 col-6 ms-1">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}