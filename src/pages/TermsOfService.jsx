import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <button onClick={() => navigate('/')} className="legal-back">
          <i className="fa-solid fa-arrow-left"></i> Home
        </button>
        <h1>Terms of Service</h1>
      </nav>

      <div className="legal-content">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>By accessing and using Zenith Dashboard, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Zenith Dashboard for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on the service</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or mirroring the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2>3. Disclaimer</h2>
          <p>The materials on Zenith Dashboard are provided on an 'as is' basis. Zenith makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section>
          <h2>4. Limitations</h2>
          <p>In no event shall Zenith or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zenith's website, even if Zenith or a Zenith authorized representative has been notified orally or in writing of the possibility of such damage.</p>
        </section>

        <section>
          <h2>5. Accuracy of Materials</h2>
          <p>The materials appearing on Zenith Dashboard could include technical, typographical, or photographic errors. Zenith does not warrant that any of the materials on its website are accurate, complete, or current. Zenith may make changes to the materials contained on its website at any time without notice.</p>
        </section>

        <section>
          <h2>6. Links</h2>
          <p>Zenith has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zenith of the site. Use of any such linked website is at the user's own risk.</p>
        </section>

        <section>
          <h2>7. Modifications</h2>
          <p>Zenith may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Zenith operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </section>

        <section>
          <h2>9. Discord Terms</h2>
          <p>By using Zenith Dashboard, you agree to comply with Discord's Terms of Service and Community Guidelines. Zenith is not affiliated with or endorsed by Discord.</p>
        </section>

        <section>
          <h2>10. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at support@zenith.com or use the AI chat support system on the website.</p>
        </section>

        <div className="legal-footer-note">
          <p><strong>Last Updated:</strong> May 21, 2026</p>
        </div>
      </div>
    </div>
  );
}
