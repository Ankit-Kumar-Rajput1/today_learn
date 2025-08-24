import React, { useState } from 'react';
//import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-main">
      <div className="contact-hero">
        <h1>Contact Me</h1>
        <p>I'm a professional Web Developer offering creative and reliable services.</p>
        <p>Let’s collaborate to build powerful websites that deliver results.</p>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <h2>What I Offer</h2>
          <ul>
            <li>✅ Custom Business Websites</li>
            <li>✅ E-commerce Development</li>
            <li>✅ WordPress & CMS Solutions</li>
            <li>✅ Mobile-Responsive Designs</li>
            <li>✅ SEO Optimization</li>
            <li>✅ Speed & Security</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Me a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
