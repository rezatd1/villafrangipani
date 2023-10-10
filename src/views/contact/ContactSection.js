import React, { useState } from 'react';
import { countries } from "../../resources/contactResources";

import "./contact.scss";

export default function ContactSection() {
  const [selectedCountry, setSelectedCountry] = useState("0");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
  };

  const sendEmail = () => {
    const subject = 'New Contact Form Submission';
    const body = `Name: ${document.getElementById('firstname').value} ${document.getElementById('lastname').value}
Phone: ${selectedCountry.phoneCode} ${document.getElementById('number').value}
Email: ${document.getElementById('email').value}
Arrival Date: ${document.getElementById('arrivalDate').value}
Departure Date: ${document.getElementById('departureDate').value}
Message: ${document.getElementById('message').value}`;

    const mailtoUrl = `mailto:contact@villafrangipani.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="contactContainer">
      <side className="side">
        <h2 className="side__header__1">contact us</h2>
        <h5 className="side__header__2">managed and marketed by:</h5>

        <p className="par">bali luxury villas</p>
        <p className="par">tel: +62 361-754344</p>
        <p className="par">email: info@baliluxuryvillas.com</p>
      </side>

      <form className="form" onSubmit={handleSubmit}>
        {/* Name */}
        <h2 className="form__name">
          name <span className="form__name__required">(required)</span>
        </h2>
        <div className="form__name__wrapper wrapper">
          <div className="form__name__firstname">
            <label htmlFor="firstname">first name</label>
            <input type="text" id="firstname" />
          </div>
          <div className="form__name__lastname">
            <label htmlFor="lastname">last name</label>
            <input type="text" id="lastname" />
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
            <input type="text" id="number" placeholder={selectedCountry.phoneCode} />
          </div>
        </div>

        {/* Email */}
        <div className="form__email">
          <label htmlFor="email">
            email <span className="form__email__required">(required)</span>
          </label>
          <input type="email" id="email" />
        </div>

        {/* Date */}
        <div className="form__date wrapper">
          {/* arrival date */}
          <div className="form__date__arrival wrapper">
            <label className="form__date__arrival__label">
              Interested Arrival Date
            </label>
            <input type="date" className="form__date__arrival__input" id="arrivalDate" />
          </div>
          <div className="form__date__departure wrapper">
            <label className="form__date__departure__label">
              Interested Departure Date
            </label>
            {/* departure date */}
            <input type="date" className="form__date__departure__input" id="departureDate" />
          </div>
        </div>

        {/* Message */}
        <div className="form__message wrapper">
          <label className="form__message__label">
            Message <span className="form__message__required">(required)</span>
          </label>
          <textarea className="form__message" id="message" />
        </div>

        <button type="submit" value="send" className="form__submit">
          send
        </button>
      </form>
    </section>
  );
}