import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function parseJwt(token) {
  try { return JSON.parse(atob(token.split('.')[1])); } catch { return null; }
}

const FEATURES = [
  { icon: 'fa-shield-halved', title: 'Auto Moderation', desc: 'Advanced AI filters detecting spam, raids & toxicity' },
  { icon: 'fa-chart-area', title: 'Analytics Dashboard', desc: 'Real-time metrics & insights on server health' },
  { icon: 'fa-scroll', title: 'Audit Logs', desc: 'Complete moderation history with advanced search' },
  { icon: 'fa-users', title: 'Member Management', desc: 'User profiles, ban lists & sanction tracking' },
  { icon: 'fa-bell', title: 'Live Notifications', desc: 'Real-time alerts & activity streams' },
  { icon: 'fa-cog', title: 'Advanced Settings', desc: 'Fine-tune rules & automod behavior' },
  { icon: 'fa-terminal', title: 'Command Center', desc: 'Browse & manage bot commands' },
  { icon: 'fa-file-chart-line', title: 'Reports', desc: 'Generate detailed moderation reports' }
];

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('zenith_token');
    if (token) {
      const payload = parseJwt(token);
      if (payload && payload.exp * 1000 > Date.now()) {
        setUser(payload);
      }
    }
  }, []);

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      window.location.href = '/api/auth/login';
    }
  };

  return (
    <div className="home-v3">
      {/* Animated Background */}
      <div className="home-bg-animated">
        <div className="home-orb home-orb-1"></div>
        <div className="home-orb home-orb-2"></div>
        <div className="home-orb home-orb-3"></div>
      </div>

      {/* Navigation */}
      <nav className="home-nav">
        <div className="home-nav-inner">
          <div className="home-brand">
            <div className="home-brand-icon">⚡</div>
            <span>Zenith</span>
          </div>
          <div className="home-nav-items">
            {user && <a href="/dashboard" className="home-nav-link">Dashboard</a>}
            <a href="#features" className="home-nav-link">Features</a>
            <a href="#pricing" className="home-nav-link">Pricing</a>
            {user ? (
              <button className="home-nav-btn active" onClick={() => navigate('/dashboard')}>
                Go to App
              </button>
            ) : (
              <button className="home-nav-btn" onClick={() => window.location.href = '/api/auth/login'}>
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="home-hero-v3">
        <div className="home-hero-content">
          <div className="home-hero-badge">✨ AI-Powered Moderation</div>
          <h1 className="home-hero-title">
            Intelligent Discord<br />
            <span className="home-gradient-text">Moderation</span>
          </h1>
          <p className="home-hero-text">
            Keep your server safe with advanced AI filters, real-time analytics, and intelligent automation.
          </p>
          <div className="home-hero-buttons">
            <button className="home-btn-primary-v3" onClick={handleGetStarted}>
              {user ? 'Open Dashboard' : 'Get Started'}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="home-btn-secondary-v3">
              <i className="fa-solid fa-play"></i>
              Watch Demo
            </button>
          </div>
          <p className="home-hero-small">14-day free trial • No credit card needed</p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="home-features-v3">
        <div className="home-section-header">
          <h2>Packed with Features</h2>
          <p>Everything you need to moderate effectively</p>
        </div>
        <div className="home-features-showcase">
          {FEATURES.map((f, i) => (
            <div key={i} className="home-feature-item-v3">
              <div className="home-feature-icon-v3">
                <i className={`fa-solid fa-${f.icon}`}></i>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Showcase */}
      <section className="home-showcase">
        <div className="home-showcase-grid">
          <div className="home-showcase-item">
            <div className="home-showcase-number">99.9%</div>
            <div className="home-showcase-label">Uptime SLA</div>
          </div>
          <div className="home-showcase-item">
            <div className="home-showcase-number">500K+</div>
            <div className="home-showcase-label">Active Users</div>
          </div>
          <div className="home-showcase-item">
            <div className="home-showcase-number">&lt;50ms</div>
            <div className="home-showcase-label">Response Time</div>
          </div>
          <div className="home-showcase-item">
            <div className="home-showcase-number">24/7</div>
            <div className="home-showcase-label">Support</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="home-pricing">
        <div className="home-section-header">
          <h2>Simple Pricing</h2>
          <p>Plans for every server</p>
        </div>
        <div className="home-pricing-grid">
          {[
            { name: 'Free', price: '$0', features: ['Auto Moderation', '5 Custom Rules', 'Basic Analytics', 'Email Support'] },
            { name: 'Pro', price: '$9.99', features: ['Everything in Free', 'Unlimited Rules', 'Advanced Analytics', 'Priority Support', 'Custom Reports'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'Dedicated Manager', 'Custom Integrations', 'SLA Guarantee'] }
          ].map((plan, i) => (
            <div key={i} className={`home-pricing-card ${plan.popular ? 'home-pricing-popular' : ''}`}>
              {plan.popular && <div className="home-pricing-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="home-pricing-amount">{plan.price}</div>
              <button className="home-pricing-btn">Choose Plan</button>
              <ul className="home-pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <i className="fa-solid fa-check"></i>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="home-final-cta">
        <div className="home-cta-content">
          <h2>Ready to protect your community?</h2>
          <p>Join thousands of servers already using Zenith</p>
          <button className="home-btn-primary-v3 home-btn-large" onClick={handleGetStarted}>
            {user ? 'Go to Dashboard' : 'Start Your Free Trial'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer-v3">
        <div className="home-footer-inner">
          <div className="home-footer-brand">
            <div className="home-brand">
              <div className="home-brand-icon">⚡</div>
              <span>Zenith</span>
            </div>
            <p>Modern Discord moderation</p>
          </div>
          <div className="home-footer-links">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#">Docs</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Status</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="home-footer-bottom">
          <p>&copy; 2026 Zenith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
