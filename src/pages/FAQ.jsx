import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQS = [
  {
    question: "What is Zenith Dashboard?",
    answer: "Zenith Dashboard is an intelligent Discord moderation platform with real-time analytics, auto-moderation, member management, and comprehensive reporting tools."
  },
  {
    question: "How much does Zenith cost?",
    answer: "We offer three plans: Free ($0), Pro ($9.99/month), and Enterprise (custom pricing). Each plan includes different features."
  },
  {
    question: "How do I get started?",
    answer: "Extract the zip file, run 'npm install', configure your backend URL in vite.config.js, and run 'npm run dev'. Then log in with Discord."
  },
  {
    question: "Is Zenith safe to use?",
    answer: "Yes! We use Discord OAuth2 for authentication, JWT tokens for sessions, and implement security best practices. Your data is encrypted and secure."
  },
  {
    question: "Can I customize AutoMod rules?",
    answer: "Yes! In the Settings page, you can create custom AutoMod rules with 5 categories: Spam, Raid, Toxicity, Links, and Custom."
  },
  {
    question: "What data does Zenith collect?",
    answer: "We collect: Discord account info (for auth), server configurations, moderation logs, and usage analytics. We never share your data with third parties."
  },
  {
    question: "How do I export reports?",
    answer: "In the Reports page, select your report type, date range, and export format (PDF, CSV, or JSON). You can also email reports directly."
  },
  {
    question: "Is there offline support for Zenith?",
    answer: "We provide 24/7 support via: AI chat assistant (this page), email at support@zenith.com, and our Discord community."
  },
  {
    question: "Can I schedule report generation?",
    answer: "Yes! In the Reports page, you can set up automatic report generation on a schedule and have them emailed to you."
  },
  {
    question: "What is the Error Boundary?",
    answer: "The Error Boundary is a React error handler that catches and displays component crashes gracefully without breaking the entire app."
  },
  {
    question: "How do keyboard shortcuts work?",
    answer: "Press 'G' then the letter (O=Overview, M=Moderation, A=Analytics). Ctrl+K opens global search. '?' shows all shortcuts."
  },
  {
    question: "Can I use Zenith on mobile?",
    answer: "Yes! Zenith is fully responsive and works on mobile, tablet, and desktop devices with optimized layouts for each."
  },
  {
    question: "How often is data updated?",
    answer: "The Notifications page auto-refreshes every 30 seconds. Analytics updates when you refresh the page. Other pages update on demand."
  },
  {
    question: "What if I encounter an error?",
    answer: "Check the error page for solutions. Common errors: 404 (page not found), 401 (not logged in), 500 (server error). Use the AI chat for help."
  },
  {
    question: "Is there a status page?",
    answer: "Yes! Visit status.zenith.com to check system uptime, maintenance windows, and incident history."
  }
];

export default function FAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-page">
      <nav className="legal-nav">
        <button onClick={() => navigate('/')} className="legal-back">
          <i className="fa-solid fa-arrow-left"></i> Home
        </button>
        <h1>Frequently Asked Questions</h1>
      </nav>

      <div className="faq-content">
        <p className="faq-intro">Find answers to common questions about Zenith Dashboard.</p>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div key={i} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.question}</span>
                <i className={`fa-solid fa-chevron-down ${openIndex === i ? 'open' : ''}`}></i>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h2>Still have questions?</h2>
          <p>Use the AI chat assistant or contact us at support@zenith.com</p>
          <button onClick={() => navigate('/contact')} className="legal-link-btn">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
