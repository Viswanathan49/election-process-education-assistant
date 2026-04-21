import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Eligibility = () => {
  const [step, setStep] = useState(0);
  const [isEligible, setIsEligible] = useState(null);
  const navigate = useNavigate();

  const questions = [
    { q: "Are you an Indian citizen?", required: true },
    { q: "Are you 18 years of age or older (or turning 18 by the next qualifying date)?", required: true },
    { q: "Are you a resident of the polling area where you want to vote?", required: true }
  ];

  const handleAnswer = (answer) => {
    if (answer === false) {
      setIsEligible(false);
      return;
    }
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsEligible(true);
    }
  };

  const reset = () => {
    setStep(0);
    setIsEligible(null);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Eligibility Checker</h1>
      
      <Card>
        {isEligible === null ? (
          <div>
            <p style={{ fontSize: '1.1rem', color: 'var(--secondary-text)', marginBottom: '0.5rem' }}>
              Question {step + 1} of {questions.length}
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{questions[step].q}</h2>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button onClick={() => handleAnswer(true)} style={{ flex: 1, backgroundColor: 'var(--success)' }}>
                Yes
              </Button>
              <Button onClick={() => handleAnswer(false)} style={{ flex: 1, backgroundColor: 'var(--danger)' }}>
                No
              </Button>
            </div>
          </div>
        ) : isEligible ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle size={64} color="var(--success)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>You are eligible!</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--secondary-text)' }}>
              Since you meet all the criteria, the next step is to fill out Form 6 to register as a new voter.
            </p>
            <Button onClick={() => navigate('/workflow')} style={{ width: '100%' }}>
              Start Registration Workflow <ArrowRight size={18} />
            </Button>
            <Button variant="outline" onClick={reset} style={{ width: '100%', marginTop: '1rem' }}>
              Start Over
            </Button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <XCircle size={64} color="var(--danger)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>Not Eligible Yet</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--secondary-text)' }}>
              Based on your answers, you must be an Indian citizen, at least 18 years of age, and residing at your address to vote. Keep checking back as your situation changes.
            </p>
            <Button onClick={reset} style={{ width: '100%' }}>
              Start Over
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Eligibility;
