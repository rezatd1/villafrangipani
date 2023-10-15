import React, { useState } from 'react';
import { countries } from "../../resources/contactResources";

import "./contact.scss";

export default function ContactSection() {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "0",
    phoneCode: "+65"
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

  const sendEmail = () => {
    const subject = 'New Contact Form Submission';
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const phoneNumber = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const arrivalDate = document.getElementById('arrivalDate').value;
    const departureDate = document.getElementById('departureDate').value;
    const message = document.getElementById('message').value;

    const selectedPhoneCode = selectedCountry ? selectedCountry.phoneCode : '';

    const body = `Name: ${firstName} ${lastName}
Phone: ${selectedPhoneCode} ${phoneNumber}
Email: ${email}
Arrival Date: ${arrivalDate}
Departure Date: ${departureDate}
Message: ${message}`;

    const mailtoUrl = `mailto:contact@villafrangipani.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="contactContainer">
      <side className="side">
        <h2 className="side__header__1">Contact us</h2>
        <h5 className="side__header__2">Managed and marketed by:</h5>

        <p className="par fw-bold">Bali Luxury Villas</p>
        <p className="par">Tel: +62 361-754344</p>
        <p className="par">Email: info@baliluxuryvillas.com</p>
      </side>

      <form className="form" action="https://submit-form.com/KyQy34RA">
        {/* Name */}
        <h2 className="form__name">
          name <span className="form__name__required">(required)</span>
        </h2>
        <div className="form__name__wrapper wrapper">
          <div className="form__name__firstname">
            <label htmlFor="firstname">first name</label>
            <input type="text" id="firstname" name='First Name' />
          </div>
          <div className="form__name__lastname">
            <label htmlFor="lastname">last name</label>
            <input type="text" id="lastname" name='Last Name' />
          </div>
        </div>

        {/* Phone */}
        <h2 className="form__phone">phone</h2>
        <div className="form__phone__wrapper wrapper">
          <div className="form__phone__country">
            <label htmlFor="country">country</label>
            <select
              className="form__phone__country__select"
              id="country"
              name='Country Code'
              onChange={(e) =>
                setSelectedCountry(
                  countries.find((country) => country.name === e.target.value)
                )
              }
            >
              {countries.map(({ name }) => (
                <option className="form__phone__country__option">{name}</option>
              ))}
            </select>
          </div>
          <div className="form__phone__number">
            <label htmlFor="number">number</label>
            <input type="text" id="number" name='Number' placeholder={selectedCountry.phoneCode} />
          </div>
        </div>

        {/* Email */}
        <div className="form__email">
          <label htmlFor="email">
            email <span className="form__email__required">(required)</span>
          </label>
          <input type="email" id="email" name='Email'/>
        </div>

        {/* Date */}
        <div className="form__date wrapper">
          {/* arrival date */}
          <div className="form__date__arrival wrapper">
            <label className="form__date__arrival__label">
              Interested Arrival Date
            </label>
            <input type="date" className="form__date__arrival__input" name='Arrival Date' id="arrivalDate" />
          </div>
          <div className="form__date__departure wrapper">
            <label className="form__date__departure__label">
              Interested Departure Date
            </label>
            {/* departure date */}
            <input type="date" name='Departure Date' className="form__date__departure__input" id="departureDate" />
          </div>
        </div>

        {/* Message */}
        <div className="form__message wrapper">
          <label className="form__message__label">
            Message <span className="form__message__required">(required)</span>
          </label>
          <textarea name='Message' className="form__message" id="message" />
        </div>

        <button type="submit" value="send" className="form__submit">
          send
        </button>
      </form>
    </section>
  );
}