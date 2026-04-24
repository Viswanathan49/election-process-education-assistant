import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { forms, documents } from '../data/mockData';
import { ExternalLink, FileSignature, Files, HelpCircle } from 'lucide-react';

const Forms = () => {
  const [step, setStep] = useState(1);
  const [recommendation, setRecommendation] = useState(null); // { data: formObj, reason: string }

  const handleRecommendation = (formId, reason) => {
    const formObj = forms.find(f => f.id === formId);
    setRecommendation({ data: formObj, reason });
  };

  const resetWizard = () => {
    setStep(1);
    setRecommendation(null);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Forms & Documents</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '2rem' }}>
        Everything you need to know about which form to fill and what documents to attach.
      </p>

      {/* Decision Wizard Section */}
      <section style={{ marginBottom: '4rem' }}>
        <Card style={{ backgroundColor: 'var(--card-bg)', border: '2px dashed var(--primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <HelpCircle color="var(--primary)" size={28} />
            <h2 style={{ margin: 0, fontSize: '1.4rem' }}>Find Your Form Wizard</h2>
          </div>

          {!recommendation ? (
            <div className="animate-fade-in">
              {step === 1 && (
                <div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Step 1 of 3</p>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Are you already registered to vote anywhere in India?</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button onClick={() => setStep(2)} style={{ flex: 1 }}>Yes, I am</Button>
                    <Button onClick={() => handleRecommendation('form-6', 'Since you are not registered yet, you are a first-time voter.')} style={{ flex: 1 }} variant="outline">No, I am not</Button>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Step 2 of 3</p>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>What do you want to do?</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Button onClick={() => handleRecommendation('form-8', 'You need to correct existing details like your name, DOB, or photo.')} variant="outline" style={{ justifyContent: 'flex-start' }}>Correct my details</Button>
                    <Button onClick={() => setStep(3)} variant="outline" style={{ justifyContent: 'flex-start' }}>Shift my residence</Button>
                    <Button onClick={() => handleRecommendation('form-7', 'You need to request the deletion of a deceased person or object to an entry.')} variant="outline" style={{ justifyContent: 'flex-start' }}>Delete/Object an entry</Button>
                  </div>
                  <Button onClick={() => setStep(1)} style={{ marginTop: '1.5rem', backgroundColor: 'transparent', color: 'var(--secondary-text)', padding: 0 }}>← Back</Button>
                </div>
              )}
              {step === 3 && (
                <div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Step 3 of 3</p>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Are you shifting within the same constituency or to a new one?</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button onClick={() => handleRecommendation('form-8', 'Shifting residence within the same constituency requires an update, not a new registration.')} style={{ flex: 1 }} variant="outline">Same Constituency</Button>
                    <Button onClick={() => handleRecommendation('form-6', 'Shifting to a completely new constituency requires a fresh registration application.')} style={{ flex: 1 }} variant="outline">New Constituency</Button>
                  </div>
                  <Button onClick={() => setStep(2)} style={{ marginTop: '1.5rem', backgroundColor: 'transparent', color: 'var(--secondary-text)', padding: 0 }}>← Back</Button>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-fade-in" style={{ padding: '1.5rem', backgroundColor: 'var(--secondary)', borderRadius: '0.5rem', border: '1px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Recommended: {recommendation.data.title}</h3>
              <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}><strong>Why:</strong> {recommendation.reason}</p>
              
              <div style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Required Documents Checklist:</h4>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-color)' }}>
                  {recommendation.data.id === 'form-6' && (
                    <><li>Passport size photo</li><li>Age Proof (Aadhaar, PAN, Birth Certificate, etc.)</li><li>Address Proof (Aadhaar, Passport, Utility Bill, etc.)</li></>
                  )}
                  {recommendation.data.id === 'form-8' && (
                    <><li>EPIC Number (Voter ID)</li><li>Proof of the correct detail (e.g. new Address Proof if shifting)</li></>
                  )}
                  {recommendation.data.id === 'form-7' && (
                    <><li>Death Certificate (if deleting deceased)</li><li>EPIC Number of the entry to be deleted</li></>
                  )}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button onClick={() => window.open(recommendation.data.link, '_blank')} style={{ flex: 1, backgroundColor: 'var(--success)' }}>
                  Go to Official Portal <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                </Button>
                <Button 
                  onClick={() => {
                    navigator.clipboard.writeText(`Voter Registration Checklist for ${recommendation.data.title}:\n- Reason: ${recommendation.reason}\n- Go to: ${recommendation.data.link}`);
                    alert('Checklist copied to clipboard!');
                  }} 
                  variant="outline" 
                  style={{ flex: 1 }}
                >
                  Copy Checklist
                </Button>
              </div>
              
              <p style={{ marginTop: '1.5rem', marginBottom: 0, fontSize: '0.85rem', color: 'var(--warning)', textAlign: 'center' }}>
                Disclaimer: Always verify specific requirements on voters.eci.gov.in before applying.
              </p>
              
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Button onClick={resetWizard} style={{ backgroundColor: 'transparent', color: 'var(--secondary-text)', padding: 0 }}>Start Over</Button>
              </div>
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
