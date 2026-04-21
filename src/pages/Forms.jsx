import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { forms, documents } from '../data/mockData';
import { ExternalLink, FileSignature, Files, HelpCircle } from 'lucide-react';

const Forms = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);

  const scenarios = [
    { label: "I am a first-time voter", form: "form-6" },
    { label: "I shifted to a new constituency", form: "form-6" },
    { label: "I need to correct my name, DOB, address, or photo", form: "form-8" },
    { label: "I shifted residence within the same constituency", form: "form-8" },
    { label: "I need to delete a deceased person's entry", form: "form-7" },
    { label: "I want to object to a duplicate entry", form: "form-7" }
  ];

  const getRecommendedForm = () => {
    if (!selectedScenario) return null;
    return forms.find(f => f.id === selectedScenario.form);
  };

  const recommendation = getRecommendedForm();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Forms & Documents</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '2rem' }}>
        Everything you need to know about which form to fill and what documents to attach.
      </p>

      {/* Decision Helper Section */}
      <section style={{ marginBottom: '3rem' }}>
        <Card style={{ backgroundColor: 'var(--bg-color)', border: '2px dashed var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <HelpCircle color="var(--primary)" size={24} />
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>What form do I need?</h2>
          </div>
          <p style={{ color: 'var(--secondary-text)', marginBottom: '1rem', fontSize: '0.9rem' }}>Select your scenario to find the correct form:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {scenarios.map((scenario, idx) => (
              <label 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  padding: '0.75rem', 
                  borderRadius: '0.5rem', 
                  backgroundColor: selectedScenario === scenario ? 'var(--secondary)' : 'var(--card-bg)',
                  border: `1px solid ${selectedScenario === scenario ? 'var(--primary)' : 'var(--border-color)'}`,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <input 
                  type="radio" 
                  name="scenario" 
                  checked={selectedScenario === scenario} 
                  onChange={() => setSelectedScenario(scenario)} 
                  style={{ cursor: 'pointer' }}
                />
                <span style={{ fontSize: '0.95rem' }}>{scenario.label}</span>
              </label>
            ))}
          </div>

          {recommendation && (
            <div style={{ padding: '1rem', backgroundColor: 'var(--success)', color: 'white', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>Recommended: {recommendation.title}</strong>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', opacity: 0.9 }}>{recommendation.description}</p>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.8rem', opacity: 0.8 }}>Always verify on the official portal before submitting.</p>
              </div>
              <Button style={{ backgroundColor: 'white', color: 'var(--success)' }} onClick={() => window.open(recommendation.link, '_blank')}>
                Go to Portal
              </Button>
            </div>
          )}
        </Card>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <FileSignature color="var(--primary)" size={28} />
          <h2 style={{ margin: 0 }}>Required Forms</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {forms.map(form => (
            <Card key={form.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{form.title}</h3>
                  <p style={{ marginBottom: '0.5rem', color: 'var(--text-color)' }}>{form.description}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--secondary-text)', margin: 0 }}><strong>Who should use this?</strong> {form.who}</p>
                </div>
                <a href={form.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem', padding: '0.5rem', backgroundColor: 'var(--secondary)', borderRadius: '0.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                  Portal <ExternalLink size={14} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Files color="var(--primary)" size={28} />
          <h2 style={{ margin: 0 }}>Valid Documents</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {documents.map((doc, idx) => (
            <Card key={idx}>
              <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                {doc.type}
              </h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--secondary-text)' }}>
                {doc.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Forms;
