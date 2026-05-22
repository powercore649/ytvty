import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SUPPORT_CHANNELS = [
  {
    icon: 'fa-robot',
    title: '24/7 AI Support',
    desc: 'Get instant answers from our AI assistant',
    action: 'Available on all pages',
    available: 'Always'
  },
  {
    icon: 'fa-envelope',
    title: 'Email Support',
    desc: 'Contact our support team directly',
    action: 'support@zenith.com',
    available: 'Within 24 hours'
  },
  {
    icon: 'fa-book',
    title: 'Documentation',
    desc: 'Read our comprehensive guides and docs',
    action: 'View Docs',
    available: 'Instant'
  },
  {
    icon: 'fa-question',
    title: 'FAQ',
    desc: 'Find answers to common questions',
    action: 'View FAQ',
    available: 'Instant'
  },
  {
    icon: 'fa-comments',
    title: 'Discord Community',
    desc: 'Join our Discord server for community support',
    action: 'Join Discord',
    available: 'Within 12 hours'
  },
  {
    icon: 'fa-signal',
    title: 'Status Page',
    desc: 'Check system status and maintenance',
    action: 'status.zenith.com',
    available: 'Real-time'
  }
];

export default function Support() {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({ subject: '', description: '', priority: 'normal' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setTicket({ subject: '', description: '', priority: 'normal' });
  };

  return (
    <div className="support-page">
      <nav className="legal-nav">
        <button onClick={() => navigate('/')} className="legal-back">
          <i className="fa-solid fa-arrow-left"></i> Home
        </button>
        <h1>Support Center</h1>
      </nav>

      <div className="support-content">
        {/* Quick Links */}
        <section className="support-section">
          <h2>Get Help</h2>
          <div className="support-grid">
            {SUPPORT_CHANNELS.map((channel, i) => (
              <div key={i} className="support-card">
                <i className={`fa-solid ${channel.icon}`}></i>
                <h3>{channel.title}</h3>
                <p>{channel.desc}</p>
                <div className="support-card-footer">
                  <span className="support-response">{channel.available}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Ticket */}
        <section className="support-section">
          <h2>Create Support Ticket</h2>
          <form className="support-form" onSubmit={handleSubmitTicket}>
            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text"
                value={ticket.subject}
                onChange={(e) => setTicket({ ...ticket, subject: e.target.value })}
                placeholder="Brief description of your issue"
                required
              />
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select 
                value={ticket.priority}
                onChange={(e) => setTicket({ ...ticket, priority: e.target.value })}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea 
                value={ticket.description}
                onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
                placeholder="Provide details about your issue..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="form-submit">
              <i className="fa-solid fa-paper-plane"></i>
              Submit Ticket
            </button>
          </form>

          {submitted && (
            <div className="support-success">
              <i className="fa-solid fa-circle-check"></i>
              <p>Ticket submitted! You'll receive a response within 24 hours.</p>
            </div>
          )}
        </section>

        {/* FAQ Links */}
        <section className="support-section">
          <h2>Common Issues</h2>
          <div className="support-issues">
            <a href="#" className="issue-link">
              <i className="fa-solid fa-arrow-right"></i>
              How to set up AutoMod rules
            </a>
            <a href="#" className="issue-link">
              <i className="fa-solid fa-arrow-right"></i>
              Understanding error codes
            </a>
            <a href="#" className="issue-link">
              <i className="fa-solid fa-arrow-right"></i>
              Generating and exporting reports
            </a>
            <a href="#" className="issue-link">
              <i className="fa-solid fa-arrow-right"></i>
              Troubleshooting login issues
            </a>
            <a href="#" className="issue-link">
              <i className="fa-solid fa-arrow-right"></i>
              Understanding analytics data
            </a>
            <a href="#" className="issue-link">
              <i className="fa-solid fa-arrow-right"></i>
              Security and data privacy
            </a>
          </div>
        </section>

        {/* Knowledge Base */}
        <section className="support-section">
          <h2>Knowledge Base</h2>
          <div className="kb-articles">
            <div className="kb-article">
              <h4>Getting Started</h4>
              <ul>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> Installation Guide</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> First Steps</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> Account Setup</a></li>
              </ul>
            </div>
            <div className="kb-article">
              <h4>Features</h4>
              <ul>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> AutoMod System</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> Analytics Dashboard</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> Reports Generation</a></li>
              </ul>
            </div>
            <div className="kb-article">
              <h4>Troubleshooting</h4>
              <ul>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> Common Errors</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> Connection Issues</a></li>
                <li><a href="#"><i className="fa-solid fa-chevron-right"></i> Performance Tips</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
