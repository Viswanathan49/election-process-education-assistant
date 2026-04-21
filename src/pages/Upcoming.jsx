import React from 'react';
import Card from '../components/Card';
import { upcomingElections } from '../data/mockData';
import { CalendarDays, MapPin } from 'lucide-react';

const Upcoming = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Upcoming Elections</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '3rem' }}>
        A quick look at state-wise predicted and scheduled legislative assembly elections.
      </p>

      <Card style={{ marginBottom: '2rem', borderLeft: '4px solid var(--warning)' }}>
        <h3 style={{ marginBottom: '0.5rem', color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Important Notice
        </h3>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>
          The dates mentioned below are estimated timelines. They are subject to official announcements by the Election Commission of India. Always verify exact dates on <strong>eci.gov.in</strong> before making travel or polling plans.
        </p>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {upcomingElections.map((election, idx) => (
          <Card key={idx} hoverable>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={20} color="var(--primary)" />
                {election.state}
              </h3>
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: 'bold', 
                backgroundColor: election.status === 'TBD' ? 'var(--secondary)' : 'var(--success)', 
                color: election.status === 'TBD' ? 'var(--secondary-text)' : 'white',
                padding: '0.25rem 0.5rem', 
                borderRadius: '1rem' 
              }}>
                {election.status}
              </span>
            </div>
            
            <p style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>
              <strong>Type:</strong> {election.type}
            </p>
            <p style={{ color: 'var(--secondary-text)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CalendarDays size={18} />
              {election.expected}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
