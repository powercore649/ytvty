import React, { useState } from 'react';

export default function Reports({ selectedGuild }) {
  const [reportType, setReportType] = useState('overview');
  const [dateRange, setDateRange] = useState('month');

  const REPORT_TYPES = [
    { id: 'overview', label: 'Overview Report', icon: 'fa-chart-pie', desc: 'Complete moderation summary' },
    { id: 'moderators', label: 'Moderator Activity', icon: 'fa-users', desc: 'Performance by moderator' },
    { id: 'offenders', label: 'Offender Report', icon: 'fa-person-burst', desc: 'Most sanctioned users' },
    { id: 'trends', label: 'Trend Analysis', icon: 'fa-chart-line', desc: 'Activity patterns over time' }
  ];

  return (
    <div className="reports-page animate-fade-in">
      {/* Header */}
      <div className="command-hero glass-panel">
        <div>
          <p className="command-eyebrow">Data & Insights</p>
          <h2 className="glow-text">Reports</h2>
          <p className="subtitle">Generate detailed moderation reports for your server.</p>
        </div>
        <div className="command-hero-stats">
          <div className="command-stat-chip">
            <strong style={{ color: '#5865F2' }}>PDF</strong>
            <span>Export Format</span>
          </div>
          <div className="command-stat-chip">
            <strong style={{ color: '#00C851' }}>Scheduled</strong>
            <span>Auto-Generate</span>
          </div>
        </div>
      </div>

      {/* Report Selector */}
      <div className="reports-selector">
        {REPORT_TYPES.map(type => (
          <button
            key={type.id}
            className={`reports-type-card ${reportType === type.id ? 'active' : ''}`}
            onClick={() => setReportType(type.id)}
          >
            <i className={`fa-solid ${type.icon}`} />
            <h4>{type.label}</h4>
            <p>{type.desc}</p>
          </button>
        ))}
      </div>

      {/* Report Generator */}
      <div className="glass-panel" style={{ padding: 30 }}>
        <h3 style={{ marginTop: 0 }}>Generate Report</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 30 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontSize: '0.85rem', fontWeight: 600, color: '#949ba4' }}>
              Date Range
            </label>
            <select 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
              className="analytics-range-btn"
              style={{ width: '100%', padding: '10px', fontSize: '0.9rem', cursor: 'pointer' }}
            >
              <option value="week">Last 7 days</option>
              <option value="month">Last 30 days</option>
              <option value="quarter">Last 3 months</option>
              <option value="year">Last year</option>
              <option value="custom">Custom range</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 8, fontSize: '0.85rem', fontWeight: 600, color: '#949ba4' }}>
              Export Format
            </label>
            <select className="analytics-range-btn" style={{ width: '100%', padding: '10px', fontSize: '0.9rem', cursor: 'pointer' }}>
              <option>PDF</option>
              <option>CSV</option>
              <option>JSON</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: 8, fontSize: '0.85rem', fontWeight: 600, color: '#949ba4' }}>
              Email to
            </label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="analytics-range-btn"
              style={{ width: '100%', padding: '10px', fontSize: '0.9rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-primary">
            <i className="fa-solid fa-download" /> Download Report
          </button>
          <button className="btn-secondary">
            <i className="fa-solid fa-envelope" /> Email Report
          </button>
          <button className="btn-secondary">
            <i className="fa-solid fa-clock" /> Schedule Report
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="glass-panel" style={{ padding: 30, marginTop: 30 }}>
        <h3 style={{ marginTop: 0 }}>Recent Reports</h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <th style={{ padding: 10, textAlign: 'left', fontSize: '0.8rem', color: '#949ba4', fontWeight: 600 }}>Type</th>
              <th style={{ padding: 10, textAlign: 'left', fontSize: '0.8rem', color: '#949ba4', fontWeight: 600 }}>Period</th>
              <th style={{ padding: 10, textAlign: 'left', fontSize: '0.8rem', color: '#949ba4', fontWeight: 600 }}>Generated</th>
              <th style={{ padding: 10, textAlign: 'left', fontSize: '0.8rem', color: '#949ba4', fontWeight: 600 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { type: 'Overview Report', period: 'May 2026', date: '2 days ago' },
              { type: 'Moderator Activity', period: 'April 2026', date: '1 week ago' },
              { type: 'Trend Analysis', period: 'March 2026', date: '1 month ago' }
            ].map((report, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: 10, fontSize: '0.85rem' }}>{report.type}</td>
                <td style={{ padding: 10, fontSize: '0.85rem', color: '#949ba4' }}>{report.period}</td>
                <td style={{ padding: 10, fontSize: '0.85rem', color: '#949ba4' }}>{report.date}</td>
                <td style={{ padding: 10 }}>
                  <button className="btn-icon" title="Download"><i className="fa-solid fa-download" /></button>
                  <button className="btn-icon" title="Delete"><i className="fa-solid fa-trash" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
