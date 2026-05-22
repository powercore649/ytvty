import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="error-illustration">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="error-actions">
          <button className="error-btn-primary" onClick={() => navigate('/dashboard')}>
            <i className="fa-solid fa-home"></i>
            Go to Dashboard
          </button>
          <button className="error-btn-secondary" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
            Go Back
          </button>
        </div>

        <div className="error-tips">
          <h3>Need Help?</h3>
          <ul>
            <li>Check the URL spelling</li>
            <li>Return to the home page</li>
            <li>Contact support</li>
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
