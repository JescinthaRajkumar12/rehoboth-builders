import React, { useState } from 'react';
// Ensure this points to your CSS file. 
// If Contact.css is in the same folder, this is correct:
import './Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // ✅ YOUR SPECIFIC FORMSPREE LINK IS NOW HERE
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrealqya";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Thank you! We will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Form Error:", error);
      setStatus('Error sending message. Please email us directly.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Left Side: Info */}
        <div className="contact-info">
          <h2>Let's Build Together</h2>
          <p>Ready to bring your dream project to life? Contact our expert team in Chennai today.</p>
          
          <div className="info-item">
            <h3>📍 Visit Us</h3>
            <p>123 Construction Avenue,<br />Anna Nagar, Chennai - 600040<br/>Tamil Nadu, India</p>
          </div>

          <div className="info-item">
            <h3>📞 Call Us</h3>
            <p>+91 98765 43210</p>
            <p>+91 44 1234 5678</p>
          </div>

          <div className="info-item">
            <h3>✉️ Email Us</h3>
            <p>info@rehobothbuilders.com</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            {/* Success/Error Message */}
            {status && (
              <div 
                className="success-message" 
                style={{
                  background: status.includes('Error') || status.includes('Oops') ? '#f8d7da' : '#d4edda',
                  color: status.includes('Error') || status.includes('Oops') ? '#721c24' : '#155724',
                  padding: '10px',
                  borderRadius: '4px',
                  marginBottom: '15px'
                }}
              >
                {status}
              </div>
            )}
            
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Tell us about your project" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">Send Inquiry</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;