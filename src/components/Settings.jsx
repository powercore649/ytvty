import React, { useState, useEffect } from 'react';

const RULE_CATEGORIES = [
  { name: 'Spam', icon: 'fa-ban', color: '#ff4444' },
  { name: 'Raid', icon: 'fa-users-slash', color: '#ff66b2' },
  { name: 'Toxicity', icon: 'fa-triangle-exclamation', color: '#ffbb33' },
  { name: 'Links', icon: 'fa-link', color: '#00A8FC' },
  { name: 'Custom', icon: 'fa-sliders', color: '#5865F2' }
];

export default function Settings({ selectedGuild }) {
  const [activeTab, setActiveTab] = useState('rules');
  const [rules, setRules] = useState([
    { id: 1, name: 'Spam Detector', category: 'Spam', enabled: true, action: 'warn' },
    { id: 2, name: 'Raid Protection', category: 'Raid', enabled: true, action: 'kick' },
  ]);
  const [showNewRule, setShowNewRule] = useState(false);

  return (
    <div className="settings-page animate-fade-in">
      {/* Header */}
      <div className="command-hero glass-panel">
        <div>
          <p className="command-eyebrow">Server Configuration</p>
          <h2 className="glow-text">Settings</h2>
          <p className="subtitle">Manage automod rules, channels, and moderation preferences.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="settings-tabs glass-panel">
        {['rules', 'channels', 'roles', 'messages'].map(tab => (
          <button
            key={tab}
            className={`settings-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <i className={`fa-solid fa-${
              tab === 'rules' ? 'shield-halved' :
              tab === 'channels' ? 'hashtag' :
              tab === 'roles' ? 'users' : 'message'
            }`} />
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Rules Tab */}
      {activeTab === 'rules' && (
        <div className="settings-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ margin: 0 }}>AutoMod Rules</h3>
            <button className="btn-primary" onClick={() => setShowNewRule(!showNewRule)}>
              <i className="fa-solid fa-plus" /> New Rule
            </button>
          </div>

          {showNewRule && (
            <div className="glass-panel" style={{ padding: 20, marginBottom: 20, borderColor: '#5865F2' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 15, marginBottom: 15 }}>
                <input type="text" placeholder="Rule name" className="settings-input" />
                <select className="settings-input">
                  <option>Select category</option>
                  {RULE_CATEGORIES.map(cat => <option key={cat.name}>{cat.name}</option>)}
                </select>
              </div>
              <textarea placeholder="Rule description" className="settings-input" rows="3" style={{ marginBottom: 15 }} />
              <div style={{ display: 'flex', gap: 10 }}>
                <button className="btn-primary">Create Rule</button>
                <button className="btn-secondary" onClick={() => setShowNewRule(false)}>Cancel</button>
              </div>
            </div>
          )}

          <div className="settings-rules-list">
            {rules.map(rule => {
              const cat = RULE_CATEGORIES.find(c => c.name === rule.category);
              return (
                <div key={rule.id} className="settings-rule-item glass-panel">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                    <div style={{ background: cat.color + '22', color: cat.color, padding: 10, borderRadius: 8 }}>
                      <i className={`fa-solid ${cat.icon}`} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: 0 }}>{rule.name}</h4>
                      <p style={{ margin: '5px 0 0', fontSize: '0.8rem', color: '#949ba4' }}>
                        Category: <strong>{rule.category}</strong> • Action: <strong>{rule.action}</strong>
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <label className="settings-toggle">
                      <input type="checkbox" defaultChecked={rule.enabled} />
                      <span></span>
                    </label>
                    <button className="btn-icon" title="Edit"><i className="fa-solid fa-pencil" /></button>
                    <button className="btn-icon" title="Delete"><i className="fa-solid fa-trash" /></button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Channels Tab */}
      {activeTab === 'channels' && (
        <div className="settings-content glass-panel" style={{ padding: 30 }}>
          <h3 style={{ marginTop: 0 }}>Channel Settings</h3>
          <p style={{ color: '#949ba4' }}>Configure which channels AutoMod monitors</p>
          
          <div className="settings-channel-list">
            {['#general', '#announcements', '#mods', '#rules'].map((ch, i) => (
              <div key={i} className="settings-channel-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-hashtag" style={{ color: '#949ba4' }} />
                  <span>{ch}</span>
                </div>
                <label className="settings-toggle">
                  <input type="checkbox" defaultChecked={i < 2} />
                  <span></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other tabs */}
      {['roles', 'messages'].includes(activeTab) && (
        <div className="glass-panel" style={{ padding: 40, textAlign: 'center' }}>
          <i className="fa-solid fa-cog" style={{ fontSize: '3rem', color: '#949ba4', marginBottom: 20 }} />
          <p style={{ color: '#949ba4' }}>Configuration for {activeTab} coming soon</p>
        </div>
      )}
    </div>
  );
}
