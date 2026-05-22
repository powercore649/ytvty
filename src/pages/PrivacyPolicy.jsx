import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <button onClick={() => navigate('/')} className="legal-back">
          <i className="fa-solid fa-arrow-left"></i> Home
        </button>
        <h1>Privacy Policy</h1>
      </nav>

      <div className="legal-content">
        <section>
          <h2>1. Introduction</h2>
          <p>Zenith Dashboard ("we", "us", "our") operates the Zenith Dashboard website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.</p>
        </section>

        <section>
          <h2>2. Information Collection and Use</h2>
          <h3>Discord Account Information</h3>
          <p>We collect information from Discord OAuth2 login, including: User ID, Username, Avatar, and Email. This is used solely for authentication and account management.</p>
          
          <h3>Server Data</h3>
          <p>When you configure moderation settings, we store: Guild ID, Channel configurations, AutoMod rules, and moderation logs. This data is associated with your account and is used to provide our services.</p>
          
          <h3>Usage Data</h3>
          <p>We may collect information on how you access and use the dashboard, including: IP address, browser type, pages visited, time spent, and interactions. This helps us improve our service.</p>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
        </section>

        <section>
          <h2>4. Use of Data</h2>
          <p>Zenith uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To gather analysis or valuable information to improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2>5. Sharing of Data</h2>
          <p>We do not share your personal data with third parties except as necessary to provide our services. We may share data with: service providers who assist us in operating our website, and when required by law.</p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You have the right to: access your data, correct inaccurate data, request deletion of your data, and opt-out of certain data processing. To exercise these rights, contact us at privacy@zenith.com.</p>
        </section>

        <section>
          <h2>7. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section>
          <h2>8. Children's Privacy</h2>
          <p>Our service is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from a child under 13, we will promptly delete such data.</p>
        </section>

        <section>
          <h2>9. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@zenith.com or use the AI support chat.</p>
        </section>

        <div className="legal-footer-note">
          <p><strong>Last Updated:</strong> May 21, 2026</p>
        </div>
      </div>
    </div>
  );
}
