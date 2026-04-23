import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Eligibility = () => {
  const [step, setStep] = useState(0);
  const [resultType, setResultType] = useState(null); // 'not-eligible', 'form-6', 'form-8', 'already-registered'
  const navigate = useNavigate();

  const questions = [
    { id: 'citizen', q: "Are you an Indian citizen?", required: true },
    { id: 'age', q: "Are you 18 years of age or older (or turning 18 by the qualifying date)?", required: true },
    { id: 'firstTime', q: "Are you registering to vote for the very first time?", required: null },
    { id: 'shifted', q: "Are you already registered in another constituency and want to shift your address?", required: null }
  ];

  const handleAnswer = (answer) => {
    const currentQ = questions[step];

    // Basic eligibility checks
    if ((currentQ.id === 'citizen' || currentQ.id === 'age') && !answer) {
      setResultType('not-eligible');
      return;
    }

    // Branching logic
    if (currentQ.id === 'firstTime') {
      if (answer) {
        setResultType('form-6');
        return;
      }
      // If not first time, ask if shifted
      setStep(step + 1);
      return;
    }

    if (currentQ.id === 'shifted') {
      if (answer) {
        setResultType('form-8');
      } else {
        setResultType('already-registered');
      }
      return;
    }

    setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setResultType(null);
  };

  const renderResult = () => {
    switch (resultType) {
      case 'not-eligible':
        return (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <XCircle size={64} color="var(--danger)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>Not Eligible Yet</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--secondary-text)' }}>
              You must be an Indian citizen and at least 18 years old to register. Please check back when you meet these requirements.
            </p>
            <Button onClick={reset} style={{ width: '100%' }}>Start Over</Button>
          </div>
        );
      case 'form-6':
        return (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle size={64} color="var(--success)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>You are eligible to register!</h2>
            <p style={{ marginBottom: '1rem', color: 'var(--secondary-text)' }}>
              Since you are a first-time voter, you need to fill out <strong>Form 6</strong>.
            </p>
            <p style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--warning)' }}>
              Always verify final eligibility on the official ECI portal.
            </p>
            <Button onClick={() => navigate('/forms')} style={{ width: '100%', marginBottom: '1rem' }}>
              View Forms & Documents <ArrowRight size={18} />
            </Button>
            <Button variant="outline" onClick={reset} style={{ width: '100%' }}>Start Over</Button>
          </div>
        );
      case 'form-8':
        return (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>Eligible to Shift</h2>
            <p style={{ marginBottom: '1rem', color: 'var(--secondary-text)' }}>
              To shift your constituency, you need to submit <strong>Form 8</strong> with your new address proof.
            </p>
            <p style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--warning)' }}>
              Always verify rules on the official ECI portal before applying.
            </p>
            <Button onClick={() => navigate('/forms')} style={{ width: '100%', marginBottom: '1rem' }}>
              View Forms & Documents <ArrowRight size={18} />
            </Button>
            <Button variant="outline" onClick={reset} style={{ width: '100%' }}>Start Over</Button>
          </div>
        );
      case 'already-registered':
        return (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>Already Registered</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--secondary-text)' }}>
              If you are already registered in your current constituency, you do not need to register again! If you need to make corrections (like name or photo), use <strong>Form 8</strong>.
            </p>
            <Button onClick={() => navigate('/assistant')} style={{ width: '100%', marginBottom: '1rem' }}>
              Ask the Assistant <ArrowRight size={18} />
            </Button>
            <Button variant="outline" onClick={reset} style={{ width: '100%' }}>Start Over</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Eligibility Checker</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '2rem' }}>
        Answer a few simple questions to determine your next steps.
      </p>
      
      <Card>
        {!resultType ? (
          <div className="animate-fade-in">
            <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Step {step + 1}
            </p>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '2rem', lineHeight: '1.4' }}>{questions[step].q}</h2>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button onClick={() => handleAnswer(true)} style={{ flex: 1, backgroundColor: 'var(--success)' }}>
                Yes
              </Button>
              <Button onClick={() => handleAnswer(false)} style={{ flex: 1, backgroundColor: 'var(--danger)' }}>
                No
              </Button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            {renderResult()}
          </div>
        )}
      </Card>
    </div>
  );
};

export default Eligibility;
