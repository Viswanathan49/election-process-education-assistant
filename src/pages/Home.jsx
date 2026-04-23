import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { ArrowRight, ShieldCheck, BookOpen, AlertCircle, FileText, CheckSquare, Compass } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '2rem' }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1.25rem', lineHeight: '1.1' }}>
          Your Guide to Voting in India.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--secondary-text)', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
          We help first-time voters navigate the electoral process. Understand your eligibility, figure out exactly which forms to submit, and prepare your documents with confidence.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <Button onClick={() => navigate('/eligibility')} style={{ padding: '1.25rem 2.5rem', fontSize: '1.2rem', borderRadius: '2rem' }}>
            Start guided check <ArrowRight size={20} />
          </Button>
        </div>

        {/* Trust Strip */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          padding: '1.5rem', 
          backgroundColor: 'var(--secondary)', 
          borderRadius: '0.75rem',
          fontSize: '0.9rem',
          color: 'var(--secondary-text)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={16} color="var(--primary)" />
            <span>Educational guidance for voters</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={16} color="var(--primary)" />
            <span>Based on official voter service categories</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={16} color="var(--primary)" />
            <span>Always verify final details on official sources</span>
          </div>
        </div>
      </div>

      {/* How it helps section */}
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>How it helps</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        <Card hoverable>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} onClick={() => navigate('/forms')}>
            <div style={{ marginBottom: '1rem' }}><FileText size={32} color="var(--primary)" /></div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>1. Find the right form</h3>
            <p style={{ color: 'var(--secondary-text)', flex: 1, margin: 0 }}>
              Stop guessing between Forms 6, 7, and 8. Tell us your situation and we'll point you to the correct application.
            </p>
          </div>
        </Card>

        <Card hoverable>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} onClick={() => navigate('/forms')}>
            <div style={{ marginBottom: '1rem' }}><CheckSquare size={32} color="var(--primary)" /></div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>2. Get a personalized checklist</h3>
            <p style={{ color: 'var(--secondary-text)', flex: 1, margin: 0 }}>
              Know exactly which age, address, and identity proofs are valid before you start filling out your application.
            </p>
          </div>
        </Card>

        <Card hoverable>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} onClick={() => navigate('/workflow')}>
            <div style={{ marginBottom: '1rem' }}><Compass size={32} color="var(--primary)" /></div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>3. Understand the next step</h3>
            <p style={{ color: 'var(--secondary-text)', flex: 1, margin: 0 }}>
              From BLO verification to finding your name on the electoral roll on polling day, follow our clear workflows.
            </p>
          </div>
        </Card>
      </div>

    </div>
  );
};

export default Home;
