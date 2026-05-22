import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '../components/ToastSystem';

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast('Please fill all fields', 'warning');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast('Message sent! We\'ll reply within 24 hours', 'success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <nav className="legal-nav">
        <button onClick={() => navigate('/')} className="legal-back">
          <i className="fa-solid fa-arrow-left"></i> Home
        </button>
        <h1>Contact Us</h1>
      </nav>

      <div className="contact-content">
        <div className="contact-intro">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Message subject"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="form-submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>

            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:support@zenith.com">support@zenith.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fa-brands fa-discord"></i>
              <div>
                <h4>Discord</h4>
                <p>Join our <a href="#">Discord community</a> for support and updates</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-robot"></i>
              <div>
                <h4>AI Support</h4>
                <p>Use the AI chat assistant available 24/7</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-globe"></i>
              <div>
                <h4>Status Page</h4>
                <p>Check <a href="#">status.zenith.com</a> for system updates</p>
              </div>
            </div>

            <h3 style={{ marginTop: 30 }}>Response Time</h3>
            <ul className="contact-times">
              <li><strong>AI Chat:</strong> Instant</li>
              <li><strong>Email Support:</strong> Within 24 hours</li>
              <li><strong>Discord:</strong> Within 12 hours</li>
              <li><strong>Critical Issues:</strong> Urgent response</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
