import React from 'react';
import { useNavigate } from 'react-router-dom';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <div className="error-container">
            <div className="error-code error-code-crash">⚠️</div>
            <h1 className="error-title">Application Error</h1>
            <p className="error-message">
              An unexpected error occurred. Please try refreshing the page or contact support.
            </p>
            
            <div className="error-illustration error-illustration-crash">
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div className="error-details">
                <h4>Error Details (Development Only):</h4>
                <pre style={{ background: 'rgba(255,68,68,0.1)', padding: 15, borderRadius: 8, overflow: 'auto' }}>
                  {this.state.error?.message}
                </pre>
              </div>
            )}

            <div className="error-actions">
              <button className="error-btn-primary" onClick={() => window.location.reload()}>
                <i className="fa-solid fa-rotate-right"></i>
                Refresh Page
              </button>
              <button className="error-btn-secondary" onClick={() => window.location.href = '/'}>
                <i className="fa-solid fa-home"></i>
                Home
              </button>
            </div>

            <div className="error-tips">
              <h3>Application Error</h3>
              <ul>
                <li>An unexpected error occurred</li>
                <li>Try refreshing the page</li>
                <li>Clear browser cache if needed</li>
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

    return this.props.children;
  }
}
