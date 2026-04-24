import React from 'react';
import Card from '../components/Card';
import { AlertTriangle, ExternalLink, Phone, Info, ShieldCheck } from 'lucide-react';

const resourceGroups = [
  {
    title: "Registration and Forms",
    items: [
      { name: "Voter Service Portal", desc: "The primary portal for submitting forms and tracking applications.", when: "Use this when you need to apply for a new Voter ID, shift your address, or correct your details.", link: "https://voters.eci.gov.in/" },
      { name: "Voter Helpline App", desc: "Official ECI mobile application for Android and iOS.", when: "Use this if you prefer managing your voter registration directly from your smartphone.", link: "https://play.google.com/store/apps/details?id=com.eci.citizen" }
    ]
  },
  {
    title: "Status and Verification",
    items: [
      { name: "Electoral Search", desc: "Search the official voter list (Electoral Roll).", when: "Use this before elections to ensure your name exists and to locate your part/serial number.", link: "https://electoralsearch.eci.gov.in/" },
      { name: "Track Application Status", desc: "Check the status of your submitted forms.", when: "Use this after applying to see if your Form 6, 7, or 8 has been approved by the BLO.", link: "https://voters.eci.gov.in/" }
    ]
  },
  {
    title: "Polling Day Information",
    items: [
      { name: "Know Your Polling Booth", desc: "Locate your assigned polling station on a map.", when: "Use this 1-2 days before the election to plan your route.", link: "https://electoralsearch.eci.gov.in/" },
      { name: "Candidate Affidavits (KYC)", desc: "View the background and affidavits of contesting candidates.", when: "Use this before voting to research the candidates in your constituency.", link: "https://affidavit.eci.gov.in/" }
    ]
  },
  {
    title: "Official Voter Help Tools",
    items: [
      { name: "National Voter Helpline", desc: "Toll-free number for queries and complaints.", when: "Call this when you face issues at the booth or need urgent application help.", phone: "1950" },
      { name: "National Grievance Services", desc: "Official portal to lodge formal complaints.", when: "Use this to report Electoral violations or unresponsive officials.", link: "https://voters.eci.gov.in/" }
    ]
  }
];

const Resources = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '2rem' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Curated Resources</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '3rem' }}>
        Verified links and official platforms for all your voter services.
      </p>

      {/* Main Disclaimer */}
      <Card style={{ marginBottom: '3rem', borderLeft: '4px solid var(--warning)', backgroundColor: 'var(--card-bg)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <ShieldCheck color="var(--warning)" size={32} style={{ flexShrink: 0 }} />
          <div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--warning)', fontSize: '1.2rem' }}>Trust Note: Verify Officially</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
              This assistant provides educational guidance. Election processes, rules, and forms can change. <strong>Always verify final details directly on the official Election Commission of India (ECI) portals linked below.</strong>
            </p>
          </div>
        </div>
      </Card>

      {/* When should I use this helper */}
      <section style={{ marginBottom: '3rem', backgroundColor: 'var(--secondary)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px dashed var(--primary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Info color="var(--primary)" size={24} />
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>When should I use this page?</h2>
        </div>
        <p style={{ margin: 0, color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Do not blindly search Google for election forms, as there are many outdated or unofficial sites. Come to this page when you are ready to take action. Every link provided below routes you strictly to an official <strong>.gov.in</strong> domain or an official ECI asset. Use the context clues under each item to ensure you are clicking the right portal for your specific task.
        </p>
      </section>

      {/* Curated Resource Groups */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {resourceGroups.map((group, gIdx) => (
          <section key={gIdx}>
            <h2 style={{ marginBottom: '1.25rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--border-color)', color: 'var(--primary)', fontSize: '1.3rem' }}>
              {group.title}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {group.items.map((item, iIdx) => (
                <Card hoverable key={iIdx} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1.15rem' }}>{item.name}</h3>
                    <p style={{ margin: 0, marginBottom: '1rem', color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                      {item.desc}
                    </p>
                    <div style={{ backgroundColor: 'var(--bg-color)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                      <strong style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.25rem' }}>When to use:</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)' }}>{item.when}</span>
                    </div>
                  </div>
                  
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold', padding: '0.75rem 1rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', width: '100%', transition: 'opacity 0.2s' }}>
                      Open Official Link <ExternalLink size={16} />
                    </a>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold', padding: '0.75rem 1rem', backgroundColor: 'var(--secondary)', color: 'var(--primary)', borderRadius: '0.5rem', width: '100%', border: '1px solid var(--primary)' }}>
                      <Phone size={16} /> Call {item.phone}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
};

export default Resources;
