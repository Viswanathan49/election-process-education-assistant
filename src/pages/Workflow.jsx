import React, { useState } from 'react';
import Card from '../components/Card';
import { workflowSteps } from '../data/mockData';

const Workflow = () => {
  const [activeTab, setActiveTab] = useState('registration');

  const tabs = [
    { id: 'registration', label: 'New Registration' },
    { id: 'polling', label: 'Polling Day' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Guided Workflows</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '2rem' }}>
        Step-by-step guides for crucial electoral processes.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeTab === tab.id ? '600' : '400',
              backgroundColor: activeTab === tab.id ? 'var(--primary)' : 'var(--secondary)',
              color: activeTab === tab.id ? '#fff' : 'var(--secondary-text)',
              transition: 'background-color 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: '1.25rem', top: 0, bottom: 0, width: '2px', backgroundColor: 'var(--border-color)', zIndex: -1 }}></div>
        {workflowSteps[activeTab].map((step, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ 
              width: '2.5rem', 
              height: '2.5rem', 
              borderRadius: '50%', 
              backgroundColor: 'var(--primary)', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              flexShrink: 0,
              boxShadow: '0 0 0 4px var(--bg-color)'
            }}>
              {idx + 1}
            </div>
            <Card style={{ flex: 1, padding: '1rem' }} hoverable>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--secondary-text)', margin: 0 }}>{step.detail}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
