import React, { useState, useRef, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Send, Bot, User, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { ASSISTANT_CONFIG } from '../config/assistantConfig';
import { checkQueryBias, isStateElectionQuery } from '../utils/verificationLayer';

const quickChips = [
  {
    q: "I am a first-time voter",
    meaning: "You are registering on the electoral roll for the very first time.",
    form: "Form 6",
    docs: "Age proof (e.g., Birth Certificate, PAN), Address proof (e.g., Aadhaar, utility bill), and a passport photo.",
    next: "Fill Form 6 online and upload your scanned documents.",
    link: "https://voters.eci.gov.in/"
  },
  {
    q: "I shifted my address",
    meaning: "You are already a registered voter but have moved to a new residence.",
    form: "Form 8 (Same Constituency) or Form 6 (New Constituency)",
    docs: "Proof of your new address (e.g., Aadhaar, electricity bill, rent agreement).",
    next: "Determine if your new address is in the same constituency or a new one, then apply online.",
    link: "https://voters.eci.gov.in/"
  },
  {
    q: "I need to correct my name",
    meaning: "Your existing Voter ID has a spelling mistake or outdated detail.",
    form: "Form 8",
    docs: "Proof of the correct detail (e.g., 10th marksheet for DOB/Name, Aadhaar for Name).",
    next: "Select 'Correction of Entries' when submitting Form 8 on the portal.",
    link: "https://voters.eci.gov.in/"
  },
  {
    q: "Which documents do I need",
    meaning: "General proofs accepted by the Election Commission.",
    form: "Applicable to Form 6 & 8",
    docs: "Aadhaar, PAN, Passport, Driving License, 10th/12th Certificates, Bank Passbook, Recent Utility Bills.",
    next: "Keep a clear scanned JPEG or PDF of your original documents ready before applying.",
    link: "https://voters.eci.gov.in/"
  },
  {
    q: "How do I check status",
    meaning: "You want to track a form you have already submitted.",
    form: "N/A",
    docs: "You only need your Reference ID (generated when you submitted the form).",
    next: "Click 'Track Application Status' on the ECI portal homepage.",
    link: "https://voters.eci.gov.in/"
  },
  {
    q: "When are election results?",
    meaning: "Kerala and Tamil Nadu held their Assembly elections in April 2026. Results for both states will be announced on May 4, 2026.",
    form: "N/A — this is a results inquiry",
    docs: "No documents required to view results.",
    next: "Visit the ECI Results portal on May 4, 2026 from 8:00 AM IST to track live counting.",
    link: "https://results.eci.gov.in/"
  }
];

/**
 * An interactive educational chat assistant providing information on election processes.
 * Simulates AI responses based on quick chips and specific keywords while maintaining a neutral, non-partisan guardrail.
 * 
 * @component
 * @returns {JSX.Element} The rendered Assistant component.
 */
const Assistant = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: ASSISTANT_CONFIG.welcomeMessage }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /**
   * Processes the user's message, updates the chat history, and simulates a delayed response from the bot.
   * Includes guardrails to reject biased political queries and specific rules for handling state election results.
   * 
   * @param {string} [text=input] - The message text to send. Defaults to the current input state if not provided.
   */
  const handleSend = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', text }];
    setMessages(newMessages);
    setInput('');

    // Mock response logic
    setTimeout(() => {
      if (checkQueryBias(text)) {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          ...ASSISTANT_CONFIG.neutralityResponse
        }]);
        return;
      }

      if (isStateElectionQuery(text)) {
        const resultsChip = quickChips.find(c => c.q === 'When are election results?');
        setMessages(prev => [...prev, { type: 'bot', structured: resultsChip }]);
        return;
      }

      const lowerText = text.toLowerCase();
      const match = quickChips.find(chip => 
        lowerText.includes(chip.q.toLowerCase().replace('?', '')) || 
        chip.q.toLowerCase().split(' ').some(word => word.length > 4 && lowerText.includes(word))
      );

      if (match) {
        setMessages(prev => [...prev, { type: 'bot', structured: match }]);
      } else {
        setMessages(prev => [...prev, { type: 'bot', text: "I'm a simple educational mock assistant focused on registration and workflows. Try asking one of the suggested questions above, or visit voters.eci.gov.in for full details." }]);
      }
    }, 600); // Simulated delay
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 12rem)' }}>
      <h1 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>Guided Assistant</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--warning)', color: 'var(--bg-color)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
          <AlertCircle size={16} />
          Educational Guidance Only. Verify on voters.eci.gov.in.
        </div>
      </div>

      {/* Quick Question Chips */}
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {quickChips.map((chip, idx) => (
          <button 
            key={idx}
            className="glass"
            onClick={() => handleSend(chip.q)}
            aria-label={`Ask: ${chip.q}`}
            style={{ 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem', 
              color: 'var(--primary)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--primary)'; e.target.style.color = 'white'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--primary)'; }}
          >
            {chip.q}
          </button>
        ))}
      </div>

      <Card className="glass" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', border: '1px solid var(--primary)' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '0.75rem', 
              flexDirection: msg.type === 'user' ? 'row-reverse' : 'row',
              width: '100%'
            }}>
              <div style={{ 
                width: '2.5rem', height: '2.5rem', borderRadius: '50%', 
                backgroundColor: msg.type === 'user' ? 'var(--primary)' : 'var(--secondary)',
                color: msg.type === 'user' ? 'white' : 'var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                {msg.type === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              
              <div style={{ 
                backgroundColor: msg.type === 'user' ? 'var(--primary)' : (msg.structured ? 'var(--card-bg)' : 'var(--secondary)'),
                color: msg.type === 'user' ? 'white' : 'var(--text-color)',
                padding: msg.structured ? '1.5rem' : '0.75rem 1rem',
                borderRadius: '1rem',
                borderTopRightRadius: msg.type === 'user' ? 0 : '1rem',
                borderTopLeftRadius: msg.type === 'bot' ? 0 : '1rem',
                border: msg.structured ? '1px solid var(--border-color)' : 'none',
                maxWidth: msg.structured ? '90%' : '75%',
                lineHeight: '1.4'
              }}>
                {msg.text && <p style={{ margin: 0 }}>{msg.text}</p>}
                
                {msg.structured && (
                  <div style={{ fontSize: '0.95rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>What this means:</strong>
                      {msg.structured.meaning}
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--secondary)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                        <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>Form to Use</strong>
                        {msg.structured.form}
                      </div>
                      <div style={{ flex: 1, minWidth: '150px', backgroundColor: 'var(--secondary)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                        <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>Documents Needed</strong>
                        {msg.structured.docs}
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <strong style={{ color: 'var(--success)', display: 'block', marginBottom: '0.25rem' }}>What to do next:</strong>
                      {msg.structured.next}
                    </div>
                    
                    <a href={msg.structured.link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>
                      Verify on Official Portal <ExternalLink size={16} />
                    </a>
                    <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--secondary-text)' }}>
                      <ShieldCheck size={13} color="#059669" />
                      <span><strong style={{ color: '#059669' }}>Verified by Election Commission Data</strong> · Educational use only</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        
        <div style={{ borderTop: '1px solid var(--border-color)', padding: '1rem', display: 'flex', gap: '0.5rem', backgroundColor: 'var(--bg-color)' }}>
          <input 
            id="assistant-chat-input"
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            aria-label="Type your election question here"
            style={{ 
              flex: 1, padding: '0.75rem 1rem', borderRadius: '0.5rem', 
              border: '1px solid var(--border-color)', outline: 'none',
              backgroundColor: 'var(--card-bg)', color: 'var(--text-color)'
            }}
          />
          <Button onClick={() => handleSend()} aria-label="Send message">
            <Send size={18} aria-hidden="true" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Assistant;
