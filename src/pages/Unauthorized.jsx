import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code error-code-401">401</div>
        <h1 className="error-title">Not Authenticated</h1>
        <p className="error-message">
          You need to be logged in to access this page. Please log in with your Discord account.
        </p>
        
        <div className="error-illustration error-illustration-lock">
          <i className="fa-solid fa-lock"></i>
        </div>

        <div className="error-actions">
          <button className="error-btn-primary" onClick={() => window.location.href = '/api/auth/login'}>
            <i className="fa-brands fa-discord"></i>
            Login with Discord
          </button>
          <button className="error-btn-secondary" onClick={() => navigate('/')}>
            <i className="fa-solid fa-home"></i>
            Home
          </button>
        </div>

        <div className="error-tips">
          <h3>Authentication Required</h3>
          <ul>
            <li>You are not logged in</li>
            <li>Your session may have expired</li>
            <li>Click "Login with Discord" to continue</li>
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
