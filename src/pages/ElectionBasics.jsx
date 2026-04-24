import React from 'react';
import Card from '../components/Card';
import { BookOpen, Landmark, Users, Scale, ShieldCheck, ExternalLink, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

const terms = [
  { term: "Constituency", desc: "A specific geographical area that elects one representative to the legislative body." },
  { term: "Electoral Roll", desc: "The official list of all registered and eligible voters in a constituency." },
  { term: "Polling Booth", desc: "The designated location where citizens go to cast their votes securely." },
  { term: "Voter ID / EPIC", desc: "Elector's Photo Identity Card. The official identity document issued by the ECI." },
  { term: "MLA", desc: "Member of Legislative Assembly. Elected to represent a constituency at the State level." },
  { term: "MP", desc: "Member of Parliament. Elected to represent a constituency at the National level." },
  { term: "Majority", desc: "When a single party or alliance wins more than half of the total seats in the house." },
  { term: "Coalition", desc: "An alliance of multiple political parties formed to achieve a majority and govern." },
  { term: "Manifesto", desc: "A public declaration of policies, promises, and goals issued by a political party." },
  { term: "NOTA", desc: "None of the Above. An option allowing a voter to officially reject all contesting candidates." }
];

const steps = [
  { title: "Notification", desc: "The ECI announces the official election dates and phases." },
  { title: "Nomination", desc: "Candidates file their official nomination papers to contest." },
  { title: "Campaigning", desc: "Parties publicly share their manifestos and seek voter support." },
  { title: "Polling Day", desc: "Registered voters cast their votes securely via EVMs at polling booths." },
  { title: "Counting & Results", desc: "Votes are counted under strict security, and winners are officially declared." }
];

const ElectionBasics = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '2rem' }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
          Election Basics
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--secondary-text)', maxWidth: '700px', margin: '0 auto' }}>
          Understand key election terms, democratic institutions, and how Parliament works in India. A simple, non-partisan guide.
        </p>
      </div>

      {/* Key Terms */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <BookOpen color="var(--primary)" size={28} />
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Key Terms</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {terms.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1rem' }}>
              <h3 style={{ margin: 0, marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '1.1rem' }}>{item.term}</h3>
              <p style={{ margin: 0, color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Election Commission of India */}
      <Card style={{ marginBottom: '4rem', borderLeft: '4px solid var(--success)', backgroundColor: 'var(--card-bg)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <ShieldCheck color="var(--success)" size={32} style={{ flexShrink: 0 }} />
          <div>
            <h2 style={{ margin: 0, marginBottom: '0.5rem', color: 'var(--text-color)', fontSize: '1.4rem' }}>
              Election Commission of India (ECI)
            </h2>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6', color: 'var(--secondary-text)', marginBottom: '1rem' }}>
              The ECI is an autonomous constitutional authority responsible for administering election processes in India at national, state, and district levels. It ensures elections are free and fair, manages the electoral rolls, and enforces the Model Code of Conduct.
            </p>
            <div style={{ backgroundColor: 'var(--bg-color)', padding: '0.75rem', borderRadius: '0.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
              <strong>Trust Note:</strong> Always verify election schedules and rules directly through official ECI resources.
            </div>
          </div>
        </div>
      </Card>

      {/* Parliament Houses */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Landmark color="var(--primary)" size={28} />
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>The Parliament of India</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <Card>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Lok Sabha</h3>
            <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Known as the <strong>House of the People</strong> or the Lower House. Members are directly elected by citizens of India through general elections. It holds primary power in lawmaking, passing budgets, and forming the national government.
            </p>
          </Card>
          <Card>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Rajya Sabha</h3>
            <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Known as the <strong>Council of States</strong> or the Upper House. Members are indirectly elected by the members of State Legislative Assemblies. It acts as a reviewing body and represents the interests of the states at the national level.
            </p>
          </Card>
        </div>

        {/* Comparison Table */}
        <div style={{ overflowX: 'auto', backgroundColor: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--border-color)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--secondary)' }}>
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--border-color)' }}>Feature</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--border-color)' }}>Lok Sabha</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--border-color)' }}>Rajya Sabha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: 'bold' }}>House Type</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Lower House</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Upper House</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: 'bold' }}>Elected By</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Directly by Citizens</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Indirectly by State MLAs</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: 'bold' }}>Standard Term</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>5 Years</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>6 Years (Permanent Body)</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: 'bold' }}>Primary Role</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Forming government, passing bills</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Reviewing bills, state representation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* MLA vs MP */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Users color="var(--primary)" size={28} />
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Representatives: MLA vs MP</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--secondary)', borderRadius: '0.75rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Member of Legislative Assembly (MLA)</h3>
            <p style={{ margin: 0, color: 'var(--secondary-text)', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Elected during <strong>State Elections</strong> (Vidhan Sabha). They represent you at the state level and vote to form the State Government (Chief Minister).
            </p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--secondary)', borderRadius: '0.75rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Member of Parliament (MP)</h3>
            <p style={{ margin: 0, color: 'var(--secondary-text)', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Elected during <strong>National Elections</strong> (Lok Sabha). They represent you at the central level and vote to form the National Government (Prime Minister).
            </p>
          </div>
        </div>
      </section>

      {/* How Elections Work */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Scale color="var(--primary)" size={28} />
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>How Elections Work</h2>
        </div>
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0.25rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && <div style={{ width: '2px', height: '100%', backgroundColor: 'var(--border-color)', margin: '0.5rem 0' }}></div>}
                </div>
                <div style={{ paddingBottom: idx < steps.length - 1 ? '0' : '0' }}>
                  <h3 style={{ margin: 0, marginBottom: '0.25rem', fontSize: '1.1rem' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: 'var(--secondary-text)', fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Official Sources Footer Note */}
      <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '0.75rem', border: '1px dashed var(--primary)' }}>
        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>Ready to participate?</h3>
        <p style={{ color: 'var(--secondary-text)', margin: '0 auto 1.5rem auto', maxWidth: '600px', fontSize: '0.95rem' }}>
          Voting is a constitutional right. Ensure your registration is complete and your voice is heard.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://voters.eci.gov.in/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', padding: '0.75rem 1.5rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '0.5rem', textDecoration: 'none' }}>
            Voter Service Portal <ExternalLink size={16} />
          </a>
          <a href="https://eci.gov.in/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', padding: '0.75rem 1.5rem', backgroundColor: 'transparent', border: '2px solid var(--primary)', color: 'var(--primary)', borderRadius: '0.5rem', textDecoration: 'none' }}>
            Official ECI Website <ExternalLink size={16} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default ElectionBasics;
