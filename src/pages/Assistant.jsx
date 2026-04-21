import React, { useState, useRef, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { faqData } from '../data/mockData';
import { Send, Bot, User } from 'lucide-react';

const Assistant = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Namaste! I am your Election Process Assistant. You can click on any of the common questions below or type a similar query, and I will do my best to help you.' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', text }];
    setMessages(newMessages);
    setInput('');

    // Mock search logic (finding a keyword match or falling back)
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = "I'm still a simple mock assistant. Could you try asking one of the pre-filled questions or check the official ECI website?";
      
      const match = faqData.find(faq => 
        lowerText.includes(faq.q.toLowerCase().replace('?', '')) || 
        faq.q.toLowerCase().split(' ').some(word => word.length > 4 && lowerText.includes(word))
      );

      if (match) {
        response = match.a;
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 600); // Simulated delay
  };

  // Group FAQs by category
  const groupedFaqs = faqData.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 12rem)' }}>
      <h1 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>Ask the Assistant</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '1.5rem' }}>
        Get quick answers to common voting and registration questions.
      </p>

      {/* Suggested Questions by Category */}
      <div style={{ marginBottom: '1rem', overflowY: 'auto', maxHeight: '30vh', padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '0.75rem', backgroundColor: 'var(--card-bg)' }}>
        {Object.entries(groupedFaqs).map(([category, questions], idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '0.9rem', color: 'var(--secondary-text)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{category}</h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {questions.map((faq, qIdx) => (
                <button 
                  key={qIdx}
                  onClick={() => handleSend(faq.q)}
                  style={{ 
                    padding: '0.4rem 0.75rem', 
                    borderRadius: '1.5rem', 
                    border: '1px solid var(--border-color)', 
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--primary)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--bg-color)'}
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '0.75rem', 
              flexDirection: msg.type === 'user' ? 'row-reverse' : 'row' 
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
                backgroundColor: msg.type === 'user' ? 'var(--primary)' : 'var(--secondary)',
                color: msg.type === 'user' ? 'white' : 'var(--text-color)',
                padding: '0.75rem 1rem',
                borderRadius: '1rem',
                borderTopRightRadius: msg.type === 'user' ? 0 : '1rem',
                borderTopLeftRadius: msg.type === 'bot' ? 0 : '1rem',
                maxWidth: '75%',
                lineHeight: '1.4'
              }}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        
        <div style={{ borderTop: '1px solid var(--border-color)', padding: '1rem', display: 'flex', gap: '0.5rem', backgroundColor: 'var(--card-bg)' }}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            style={{ 
              flex: 1, padding: '0.75rem 1rem', borderRadius: '0.5rem', 
              border: '1px solid var(--border-color)', outline: 'none',
              backgroundColor: 'var(--bg-color)', color: 'var(--text-color)'
            }}
          />
          <Button onClick={() => handleSend()}>
            <Send size={18} />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Assistant;
