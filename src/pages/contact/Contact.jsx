import React, { useState } from 'react';
import './Contact.css';
import { Phone } from '../../components/icons/phone/Phone';
import { Email } from '../../components/icons/email/Email';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here, e.g., sending data to a server
    console.log(formData);
    alert('Form submitted! Check console for data.');
  };
  return (
    <div className="contact-container">
      <div className="info">
        <div className="info-item">
          <span><Phone /><h3>Call To Us</h3></span>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801112222</p>
          <hr/>
          <span><Email /><h3>Write To Us</h3></span>         
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: support@exclusive.com</p>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              onChange={handleInputChange}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone *"
              required
              onChange={handleInputChange}
              value={formData.phone}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleInputChange}
            value={formData.message}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
