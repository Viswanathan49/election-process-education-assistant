import React from 'react';
import Card from '../components/Card';
import { AlertTriangle, BookOpen, ExternalLink, Phone } from 'lucide-react';

const Resources = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Resources & Links</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '3rem' }}>
        Helpful links and official platforms for voter services.
      </p>

      <Card style={{ marginBottom: '2rem', borderLeft: '4px solid var(--warning)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <AlertTriangle color="var(--warning)" size={32} style={{ flexShrink: 0 }} />
          <div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--warning)' }}>Disclaimer</h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              This is a hackathon project built for educational purposes. Election processes, eligibility criteria, and important dates may change. <strong>Always verify information with the official Election Commission of India (ECI) websites or the Chief Electoral Officer (CEO) of your state.</strong>
            </p>
          </div>
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <Card hoverable>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <BookOpen color="var(--primary)" size={24} />
            <h3 style={{ margin: 0 }}>Voter Service Portal</h3>
          </div>
          <p style={{ color: 'var(--secondary-text)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            The official portal for New Registration, Corrections, Deletions, and checking Electoral Roll status.
          </p>
          <a href="https://voters.eci.gov.in/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}>
            Visit Portal <ExternalLink size={16} />
          </a>
        </Card>

        <Card hoverable>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Phone color="var(--primary)" size={24} />
            <h3 style={{ margin: 0 }}>Voter Helpline App</h3>
          </div>
          <p style={{ color: 'var(--secondary-text)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Download the official Voter Helpline App from Google Play Store or Apple App Store for mobile access.
          </p>
          <a href="https://eci.gov.in/voter/voter-helpline-app/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}>
            More Info <ExternalLink size={16} />
          </a>
        </Card>
      </div>

      <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '0.75rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>National Voter Helpline Number</h3>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', margin: 0, letterSpacing: '2px' }}>1950</p>
        <p style={{ color: 'var(--secondary-text)', marginTop: '0.5rem', fontSize: '0.9rem' }}>Call for any voting-related queries or complaints.</p>
      </div>
    </div>
  );
};

export default Resources;
