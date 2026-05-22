import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NetworkError() {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) {
    return (
      <div className="error-page">
        <div className="error-container">
          <div className="error-code error-code-success">✓</div>
          <h1 className="error-title">Connection Restored</h1>
          <p className="error-message">
            Your connection has been restored. Redirecting you back...
          </p>
          
          <div className="error-illustration error-illustration-success">
            <i className="fa-solid fa-circle-check"></i>
          </div>

          <button className="error-btn-primary" onClick={() => navigate('/dashboard')}>
            <i className="fa-solid fa-arrow-right"></i>
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code error-code-offline">☒</div>
        <h1 className="error-title">No Connection</h1>
        <p className="error-message">
          You appear to be offline. Please check your internet connection and try again.
        </p>
        
        <div className="error-illustration error-illustration-offline">
          <i className="fa-solid fa-wifi"></i>
        </div>

        <div className="error-actions">
          <button className="error-btn-primary" onClick={() => window.location.reload()}>
            <i className="fa-solid fa-rotate-right"></i>
            Retry Connection
          </button>
          <button className="error-btn-secondary" disabled style={{ opacity: 0.5 }}>
            <i className="fa-solid fa-signal"></i>
            Waiting for Connection...
          </button>
        </div>

        <div className="error-tips">
          <h3>Connection Issues</h3>
          <ul>
            <li>Check your internet connection</li>
            <li>Verify WiFi or mobile data is enabled</li>
            <li>Try moving closer to your router</li>
            <li>Restart your device if needed</li>
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
