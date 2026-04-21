import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { UserCheck, FileText, CheckCircle, MessageCircle } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingTop: '3rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
        Election Process Education Assistant
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--secondary-text)', marginBottom: '3rem' }}>
        Learn about your voting rights, check your eligibility, and understand the registration process in simple language. Your vote is your voice.
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
        <Button onClick={() => navigate('/eligibility')} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          Check Eligibility
        </Button>
        <Button variant="outline" onClick={() => navigate('/workflow')} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          View Guided Flow
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left' }}>
        <FeatureCard 
          icon={<UserCheck size={32} color="var(--primary)" />}
          title="Eligibility"
          desc="Find out if you can vote and what you need."
          onClick={() => navigate('/eligibility')}
        />
        <FeatureCard 
          icon={<FileText size={32} color="var(--primary)" />}
          title="Forms & Docs"
          desc="Understand Forms 6, 7, and 8 in plain English."
          onClick={() => navigate('/forms')}
        />
        <FeatureCard 
          icon={<CheckCircle size={32} color="var(--primary)" />}
          title="Workflows"
          desc="Step-by-step guidance for polling day."
          onClick={() => navigate('/workflow')}
        />
        <FeatureCard 
          icon={<MessageCircle size={32} color="var(--primary)" />}
          title="Ask Assistant"
          desc="Get simplified answers to common questions."
          onClick={() => navigate('/assistant')}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, onClick }) => (
  <div 
    onClick={onClick}
    style={{ 
      padding: '1.5rem', 
      backgroundColor: 'var(--card-bg)', 
      borderRadius: '0.75rem', 
      border: '1px solid var(--border-color)',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div style={{ marginBottom: '1rem' }}>{icon}</div>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ color: 'var(--secondary-text)', margin: 0 }}>{desc}</p>
  </div>
);

export default Home;
