import React from 'react';
import Card from '../components/Card';
import { forms, documents } from '../data/mockData';
import { ExternalLink, FileSignature, Files } from 'lucide-react';

const Forms = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Forms & Documents</h1>
      <p style={{ textAlign: 'center', color: 'var(--secondary-text)', marginBottom: '3rem' }}>
        Everything you need to know about which form to fill and what documents to attach.
      </p>

      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <FileSignature color="var(--primary)" size={28} />
          <h2 style={{ margin: 0 }}>Required Forms</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {forms.map(form => (
            <Card key={form.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{form.title}</h3>
                  <p style={{ marginBottom: '0.5rem', color: 'var(--text-color)' }}>{form.description}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--secondary-text)', margin: 0 }}><strong>Who should use this?</strong> {form.who}</p>
                </div>
                <a href={form.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem', padding: '0.5rem', backgroundColor: 'var(--secondary)', borderRadius: '0.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                  Portal <ExternalLink size={14} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Files color="var(--primary)" size={28} />
          <h2 style={{ margin: 0 }}>Valid Documents</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {documents.map((doc, idx) => (
            <Card key={idx}>
              <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                {doc.type}
              </h3>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--secondary-text)' }}>
                {doc.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Forms;
