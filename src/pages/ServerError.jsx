import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServerError() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code error-code-500">500</div>
        <h1 className="error-title">Server Error</h1>
        <p className="error-message">
          Something went wrong on our end. Our team has been notified and is working to fix the issue.
        </p>
        
        <div className="error-illustration error-illustration-error">
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>

        <div className="error-actions">
          <button className="error-btn-primary" onClick={() => window.location.reload()}>
            <i className="fa-solid fa-rotate-right"></i>
            Try Again
          </button>
          <button className="error-btn-secondary" onClick={() => navigate('/')}>
            <i className="fa-solid fa-home"></i>
            Home
          </button>
        </div>

        <div className="error-tips">
          <h3>Server Error (500)</h3>
          <ul>
            <li>An unexpected error occurred</li>
            <li>Our team has been notified</li>
            <li>Try refreshing the page</li>
            <li>Contact support if the issue persists</li>
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
