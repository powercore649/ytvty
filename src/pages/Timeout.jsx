import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Timeout() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code error-code-timeout">⏱️</div>
        <h1 className="error-title">Request Timeout</h1>
        <p className="error-message">
          The request took too long to complete. The server may be overloaded or your connection is slow.
        </p>
        
        <div className="error-illustration error-illustration-timeout">
          <i className="fa-solid fa-hourglass-end"></i>
        </div>

        <div className="error-actions">
          <button className="error-btn-primary" onClick={() => window.location.reload()}>
            <i className="fa-solid fa-rotate-right"></i>
            Try Again
          </button>
          <button className="error-btn-secondary" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
            Go Back
          </button>
        </div>

        <div className="error-tips">
          <h3>Request Timeout</h3>
          <ul>
            <li>The request took longer than expected</li>
            <li>Your connection may be slow</li>
            <li>The server may be under heavy load</li>
            <li>Try again in a few moments</li>
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
