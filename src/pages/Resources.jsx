import React from 'react';
import Card from '../components/Card';
import { AlertTriangle, BookOpen, ExternalLink, Phone, CheckSquare, Search } from 'lucide-react';

const Resources = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Resources & Links</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '3rem' }}>
        Helpful links and official platforms for voter services.
      </p>

      {/* Main Disclaimer */}
      <Card style={{ marginBottom: '3rem', borderLeft: '4px solid var(--warning)', backgroundColor: 'var(--card-bg)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <AlertTriangle color="var(--warning)" size={32} style={{ flexShrink: 0 }} />
          <div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--warning)', fontSize: '1.2rem' }}>Important Disclaimer</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
              This is a hackathon project built for educational purposes. Election processes, eligibility criteria, and timeline data may change. <strong>Always verify information with the official Election Commission of India (ECI) websites or the Chief Electoral Officer (CEO) of your state.</strong>
            </p>
          </div>
        </div>
      </Card>

      {/* What to Verify Before Submitting */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <CheckSquare color="var(--primary)" size={28} />
          <h2 style={{ margin: 0 }}>Before You Apply</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <Card>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={18} color="var(--primary)" /> Roll Search
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-text)', margin: 0 }}>
              Verify if your name is already on the Electoral Roll before submitting Form 6 to avoid duplicate entries.
            </p>
          </Card>
          <Card>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} color="var(--primary)" /> Keep Docs Ready
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-text)', margin: 0 }}>
              Keep scanned copies of your Address Proof, Age Proof, and a recent passport-sized photograph ready.
            </p>
          </Card>
        </div>
      </section>

      {/* Official Links */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>Official Verification Links</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Card hoverable style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem' }}>
            <div>
              <h3 style={{ margin: 0, marginBottom: '0.25rem', fontSize: '1.1rem' }}>Voter Service Portal</h3>
              <p style={{ margin: 0, color: 'var(--secondary-text)', fontSize: '0.9rem' }}>Official portal for Form submission & status tracking.</p>
            </div>
            <a href="https://voters.eci.gov.in/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold', padding: '0.5rem 1rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '0.5rem' }}>
              Visit <ExternalLink size={16} />
            </a>
          </Card>
          
          <Card hoverable style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem' }}>
            <div>
              <h3 style={{ margin: 0, marginBottom: '0.25rem', fontSize: '1.1rem' }}>Electoral Search</h3>
              <p style={{ margin: 0, color: 'var(--secondary-text)', fontSize: '0.9rem' }}>Check if your name is on the voter list.</p>
            </div>
            <a href="https://electoralsearch.eci.gov.in/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold', padding: '0.5rem 1rem', backgroundColor: 'var(--secondary)', color: 'var(--primary)', borderRadius: '0.5rem' }}>
              Search <ExternalLink size={16} />
            </a>
          </Card>
        </div>
      </section>

      {/* Helpline Contact */}
      <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '0.75rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Phone size={32} color="var(--primary)" />
        </div>
        <h3 style={{ marginBottom: '0.5rem' }}>National Voter Helpline Number</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', margin: '1rem 0', letterSpacing: '4px' }}>1950</p>
        <p style={{ color: 'var(--secondary-text)', margin: 0, fontSize: '0.95rem' }}>Call toll-free for any voting-related queries or complaints.</p>
      </div>
    </div>
  );
};

export default Resources;
