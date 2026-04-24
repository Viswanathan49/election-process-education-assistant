import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { upcomingElections } from '../data/mockData';
import { CalendarDays, MapPin, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const getStatusBadge = (status) => {
  switch (status.toLowerCase()) {
    case 'announced':
      return { bg: 'var(--success)', color: 'white', text: 'Announced' };
    case 'expected':
      return { bg: 'var(--primary)', color: 'white', text: 'Expected' };
    default:
      return { bg: 'var(--secondary)', color: 'var(--secondary-text)', text: 'To be confirmed' };
  }
};

const Upcoming = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '2rem' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Upcoming Elections Tracker</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '3rem', fontSize: '1.1rem' }}>
        Estimated timelines for legislative assembly elections.
      </p>

      {/* Improved Intro & Disclaimer */}
      <Card style={{ marginBottom: '3rem', border: '1px solid var(--warning)', backgroundColor: 'var(--card-bg)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <AlertCircle color="var(--warning)" size={32} style={{ flexShrink: 0 }} />
          <div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--warning)', fontSize: '1.2rem' }}>
              Estimations Only — Not Final
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-color)' }}>
              The timelines listed below are projected based on the expiry of current assembly terms. <strong>They are not official declarations.</strong> The Election Commission of India (ECI) retains sole authority to announce official poll dates. Always verify final schedules directly on official ECI press releases before finalizing any travel or polling arrangements.
            </p>
          </div>
        </div>
      </Card>

      {/* Actionable Next Steps Box */}
      <div style={{ marginBottom: '3rem', backgroundColor: 'var(--secondary)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px dashed var(--primary)' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.15rem' }}>What you should do right now:</h3>
        <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-color)' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--success)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
            <span><strong>Verify dates:</strong> Check the official <a href="https://eci.gov.in" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>eci.gov.in</a> portal for press releases.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--success)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
            <span><strong>Confirm constituency:</strong> Ensure you know exactly which assembly constituency you are registered in.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--success)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
            <span><strong>Check roll status:</strong> Verify your name on the electoral roll <em>before</em> the election dates are officially announced.</span>
          </li>
        </ul>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <Button onClick={() => navigate('/resources')} style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            View Official Links <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
          </Button>
        </div>
      </div>

      {/* Election Cards Grid */}
      <h2 style={{ marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--border-color)', color: 'var(--text-color)', fontSize: '1.3rem' }}>
        State Legislative Assemblies
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {upcomingElections.map((election, idx) => {
          const badge = getStatusBadge(election.status);
          return (
            <Card key={idx} hoverable style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)' }}>
                  <MapPin size={22} color="var(--primary)" />
                  {election.state}
                </h3>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 'bold', 
                  textTransform: 'uppercase',
                  backgroundColor: badge.bg, 
                  color: badge.color,
                  padding: '0.35rem 0.75rem', 
                  borderRadius: '1rem',
                  letterSpacing: '0.05em'
                }}>
                  {badge.text}
                </span>
              </div>
              
              <div style={{ flex: 1 }}>
                <p style={{ color: 'var(--text-color)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  <strong>Type:</strong> {election.type}
                </p>
                <div style={{ backgroundColor: 'var(--bg-color)', padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CalendarDays size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--secondary-text)', textTransform: 'uppercase', fontWeight: 'bold' }}>Estimated Timeline</span>
                    <span style={{ fontSize: '1rem', color: 'var(--text-color)', fontWeight: 'bold' }}>{election.expected}</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Upcoming;
