import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceUnavailable() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          window.location.reload();
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code error-code-503">503</div>
        <h1 className="error-title">Service Unavailable</h1>
        <p className="error-message">
          The server is temporarily unavailable. We're performing maintenance. Please try again in a few moments.
        </p>
        
        <div className="error-illustration error-illustration-maintenance">
          <i className="fa-solid fa-wrench"></i>
        </div>

        <div className="error-progress">
          <p>Auto-refreshing in <strong>{countdown}s</strong>...</p>
          <div className="error-progress-bar">
            <div className="error-progress-fill" style={{ width: `${(5-countdown)/5 * 100}%` }}></div>
          </div>
        </div>

        <div className="error-actions">
          <button className="error-btn-primary" onClick={() => window.location.reload()}>
            <i className="fa-solid fa-rotate-right"></i>
            Refresh Now
          </button>
          <button className="error-btn-secondary" onClick={() => navigate('/')}>
            <i className="fa-solid fa-home"></i>
            Home
          </button>
        </div>

        <div className="error-tips">
          <h3>Maintenance in Progress</h3>
          <ul>
            <li>We're performing scheduled maintenance</li>
            <li>Expected downtime: ~5-10 minutes</li>
            <li>The page will automatically refresh</li>
            <li>Check status.zenith.com for updates</li>
          </ul>
        </div>
      </div>

      <div className="error-bg-decoration">
        <div className="error-orb error-orb-1"></div>
        <div className="error-orb error-orb-2"></div>
      </div>
    </div>
  );
}
