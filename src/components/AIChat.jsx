import React, { useState, useEffect, useRef } from 'react';
import { toast } from './ToastSystem';

const AI_RESPONSES = {
  greeting: "Hi! I'm Zenith AI Assistant. How can I help you today?",
  pricing: "We offer 3 plans: Free ($0), Pro ($9.99/month), and Enterprise (custom). Each includes different features.",
  features: "Our main features are: Auto Moderation, Analytics, Member Profiles, Audit Logs, Settings, Reports, and more!",
  setup: "To get started: 1) Extract the zip, 2) Run 'npm install', 3) Configure your backend URL, 4) Run 'npm run dev'",
  login: "You can log in using your Discord account. Click 'Login with Discord' on the login page.",
  error404: "A 404 error means the page you're looking for doesn't exist. Try navigating to the home page.",
  error500: "A 500 error indicates a server problem. Our team has been notified and is working on it.",
  support: "You can reach our support team through: 1) This chat, 2) Email at support@zenith.com, 3) Discord",
  documentation: "Full documentation is available on our website. Check out the guides and FAQs.",
  dashboard: "The dashboard allows you to manage moderation, view analytics, and configure your server.",
  settings: "In Settings, you can create custom AutoMod rules, configure channels, and set up roles.",
  reports: "Reports generate moderation analytics. You can export as PDF, CSV, or JSON and email them.",
  notifications: "Notifications show real-time moderation activity. They auto-refresh every 30 seconds.",
  audit: "The Audit Log is a searchable history of all moderation actions with advanced filters.",
  members: "Members page shows all users with sanctions, their history, and severity badges.",
  analytics: "Analytics displays charts, KPIs, top moderators, and activity trends for your server.",
  default: "I'm here to help! Ask me about pricing, features, setup, or how to use any part of the dashboard."
};

const KEYWORDS = {
  'pricing': AI_RESPONSES.pricing,
  'price': AI_RESPONSES.pricing,
  'cost': AI_RESPONSES.pricing,
  'plan': AI_RESPONSES.pricing,
  'features': AI_RESPONSES.features,
  'how': AI_RESPONSES.features,
  'what': AI_RESPONSES.features,
  'setup': AI_RESPONSES.setup,
  'install': AI_RESPONSES.setup,
  'start': AI_RESPONSES.setup,
  'login': AI_RESPONSES.login,
  'signin': AI_RESPONSES.login,
  'auth': AI_RESPONSES.login,
  '404': AI_RESPONSES.error404,
  'error': AI_RESPONSES.error500,
  'support': AI_RESPONSES.support,
  'help': AI_RESPONSES.support,
  'contact': AI_RESPONSES.support,
  'docs': AI_RESPONSES.documentation,
  'documentation': AI_RESPONSES.documentation,
  'guide': AI_RESPONSES.documentation,
  'dashboard': AI_RESPONSES.dashboard,
  'settings': AI_RESPONSES.settings,
  'rules': AI_RESPONSES.settings,
  'reports': AI_RESPONSES.reports,
  'export': AI_RESPONSES.reports,
  'notifications': AI_RESPONSES.notifications,
  'alerts': AI_RESPONSES.notifications,
  'audit': AI_RESPONSES.audit,
  'history': AI_RESPONSES.audit,
  'members': AI_RESPONSES.members,
  'users': AI_RESPONSES.members,
  'analytics': AI_RESPONSES.analytics,
  'stats': AI_RESPONSES.analytics,
  'charts': AI_RESPONSES.analytics
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('zenith_chat_history');
    return saved ? JSON.parse(saved) : [{ type: 'ai', text: AI_RESPONSES.greeting, timestamp: new Date() }];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('zenith_chat_history', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getAIResponse = (userMessage) => {
    const lower = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(KEYWORDS)) {
      if (lower.includes(keyword)) {
        return response;
      }
    }
    
    return AI_RESPONSES.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { type: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages(prev => [...prev, { type: 'ai', text: aiResponse, timestamp: new Date() }]);
      setIsLoading(false);
    }, 500);
  };

  const handleClearHistory = () => {
    if (window.confirm('Clear chat history?')) {
      setMessages([{ type: 'ai', text: AI_RESPONSES.greeting, timestamp: new Date() }]);
      localStorage.removeItem('zenith_chat_history');
      toast('Chat history cleared', 'info');
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        className="ai-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        title="Open AI Support Chat"
      >
        <i className="fa-solid fa-robot"></i>
        <span className="ai-chat-badge">AI</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <i className="fa-solid fa-robot"></i>
              <span>Zenith AI Support</span>
            </div>
            <div className="ai-chat-actions">
              <button 
                className="ai-chat-icon-btn"
                onClick={handleClearHistory}
                title="Clear history"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button 
                className="ai-chat-icon-btn"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="ai-chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-message ai-message-${msg.type}`}>
                {msg.type === 'ai' && <i className="fa-solid fa-robot"></i>}
                <div className="ai-message-content">
                  <p>{msg.text}</p>
                  <span className="ai-message-time">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="ai-message ai-message-ai">
                <i className="fa-solid fa-robot"></i>
                <div className="ai-message-content">
                  <div className="ai-typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buttons */}
          {messages.length === 1 && (
            <div className="ai-chat-quick">
              <button onClick={() => {
                setInput('What are your pricing plans?');
                setTimeout(() => handleSend(), 100);
              }}>Pricing</button>
              <button onClick={() => {
                setInput('How do I get started?');
                setTimeout(() => handleSend(), 100);
              }}>Setup</button>
              <button onClick={() => {
                setInput('What features do you have?');
                setTimeout(() => handleSend(), 100);
              }}>Features</button>
            </div>
          )}

          {/* Input */}
          <div className="ai-chat-input-wrap">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="ai-chat-input"
            />
            <button 
              onClick={handleSend}
              className="ai-chat-send"
              disabled={!input.trim() || isLoading}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
