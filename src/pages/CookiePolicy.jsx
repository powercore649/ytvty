import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CookiePolicy() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <button onClick={() => navigate('/')} className="legal-back">
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
        <h1>Cookie Policy</h1>
      </nav>

      <div className="legal-container">
        <div className="legal-content">
          <p className="legal-updated">Last updated: May 21, 2026</p>

          <section className="legal-section">
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small pieces of data stored on your browser or device. They are used to remember information about you, such as your preferences and login status. Cookies help improve your experience on our website.</p>
          </section>

          <section className="legal-section">
            <h2>2. Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They include:</p>
            <ul>
              <li><strong>Session Token:</strong> zenith_token - Stores your login authentication</li>
              <li><strong>CSRF Protection:</strong> Prevents unauthorized actions</li>
            </ul>

            <h3>Functional Cookies</h3>
            <p>These cookies enhance functionality:</p>
            <ul>
              <li><strong>Theme Preference:</strong> Stores your dark/light mode choice</li>
              <li><strong>Language:</strong> Remembers your language preference</li>
            </ul>

            <h3>Analytics Cookies</h3>
            <p>These cookies help us understand how you use our service:</p>
            <ul>
              <li>Page views and interactions</li>
              <li>Time spent on pages</li>
              <li>Features used</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Third-Party Cookies</h2>
            <p>We may use cookies from third-party services for analytics and functionality. These services include:</p>
            <ul>
              <li>Google Analytics (analytics)</li>
              <li>Discord OAuth (authentication)</li>
              <li>Sentry (error tracking)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. How to Control Cookies</h2>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site, and some services and functionalities may not work.</p>
          </section>

          <section className="legal-section">
            <h2>5. Cookie Consent</h2>
            <p>By using Zenith Dashboard, you consent to our use of cookies as described in this policy. If you do not consent to our use of cookies, please disable them in your browser settings.</p>
          </section>

          <section className="legal-section">
            <h2>6. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us:</p>
            <p>
              Email: <a href="mailto:privacy@zenith.dev">privacy@zenith.dev</a><br />
              Website: <a href="https://zenith.dev">https://zenith.dev</a>
            </p>
          </section>

          <div className="legal-footer-nav">
            <a href="/terms">Terms of Service</a>
            <span>•</span>
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
