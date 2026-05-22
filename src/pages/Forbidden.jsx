import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Forbidden() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code error-code-403">403</div>
        <h1 className="error-title">Access Denied</h1>
        <p className="error-message">
          You don't have permission to access this resource. Contact an administrator if you believe this is a mistake.
        </p>
        
        <div className="error-illustration error-illustration-forbidden">
          <i className="fa-solid fa-shield-halved"></i>
        </div>

        <div className="error-actions">
          <button className="error-btn-primary" onClick={() => navigate('/dashboard')}>
            <i className="fa-solid fa-arrow-left"></i>
            Back to Dashboard
          </button>
          <button className="error-btn-secondary" onClick={() => navigate('/')}>
            <i className="fa-solid fa-home"></i>
            Home
          </button>
        </div>

        <div className="error-tips">
          <h3>Access Denied</h3>
          <ul>
            <li>You lack the required permissions</li>
            <li>This resource is restricted</li>
            <li>Contact your server administrator</li>
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
