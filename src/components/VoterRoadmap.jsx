import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, MapPin, UserPlus, Info } from 'lucide-react';

const VoterRoadmap = () => {
  const { t } = useLanguage();
  const [isFirstTime, setIsFirstTime] = useState(null);
  const [state, setState] = useState('');
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleGenerate = () => {
    if (isFirstTime !== null && state) {
      setShowRoadmap(true);
    }
  };

  const reset = () => {
    setIsFirstTime(null);
    setState('');
    setShowRoadmap(false);
  };

  if (showRoadmap) {
    const checklist = [];
    if (isFirstTime) {
      checklist.push({ icon: <UserPlus />, text: t.form6Msg });
    } else {
      checklist.push({ icon: <Info />, text: t.generalVoterMsg });
    }

    if (state.toLowerCase().includes('bengal')) {
      checklist.push({ icon: <MapPin />, text: t.wbPhaseMsg });
    }

    checklist.push({ icon: <CheckCircle2 />, text: t.readyToVote });

    return (
      <Card className="animate-fade-in" style={{ padding: '2rem', border: '2px solid var(--primary)' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{t.roadmapTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {checklist.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--secondary)', borderRadius: '0.5rem' }}>
              <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
              <span style={{ fontWeight: '500' }}>{item.text}</span>
            </div>
          ))}
        </div>
        <Button onClick={reset} variant="outline" style={{ marginTop: '1.5rem', width: '100%' }} aria-label="Reset Roadmap">
          Start Over
        </Button>
      </Card>
    );
  }

  return (
    <Card className="glass" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>{t.roadmapTitle}</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ marginBottom: '0.75rem', fontWeight: 'bold' }}>{t.firstTimeQ}</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => setIsFirstTime(true)}
            aria-pressed={isFirstTime === true}
            aria-label={t.yes}
            style={{ 
              flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', 
              backgroundColor: isFirstTime === true ? 'var(--primary)' : 'transparent',
              color: isFirstTime === true ? 'white' : 'var(--text-color)',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            {t.yes}
          </button>
          <button 
            onClick={() => setIsFirstTime(false)}
            aria-pressed={isFirstTime === false}
            aria-label={t.no}
            style={{ 
              flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', 
              backgroundColor: isFirstTime === false ? 'var(--primary)' : 'transparent',
              color: isFirstTime === false ? 'white' : 'var(--text-color)',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            {t.no}
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor="state-select" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 'bold' }}>{t.stateQ}</label>
        <select 
          id="state-select"
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}
        >
          <option value="">Select State</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Bihar">Bihar</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <Button 
        onClick={handleGenerate} 
        disabled={isFirstTime === null || !state}
        style={{ width: '100%', opacity: (isFirstTime === null || !state) ? 0.5 : 1 }}
        aria-label={t.generate}
      >
        {t.generate}
      </Button>
    </Card>
  );
};

export default VoterRoadmap;
