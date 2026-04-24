import React from 'react';
import { X, Info, Sparkles, Terminal, Shield } from 'lucide-react';

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(4px)'
    }}>
      <div className="glass" style={{
        maxWidth: '600px',
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto',
        borderRadius: '1rem',
        padding: '2rem',
        position: 'relative',
        color: 'var(--text-color)'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary-text)' }}
        >
          <X size={24} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Sparkles color="var(--primary)" size={28} />
          <h2 style={{ margin: 0 }}>About this AI Strategy</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>
              <Terminal size={18} />
              <span>Agentic Architecture</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', margin: 0 }}>
              This application was architected using <strong>Google Antigravity</strong>. The prompt strategy focused on a modular, component-based approach where each feature (Eligibility, Forms, Basics) is a standalone "skill" orchestrated by a central layout.
            </p>
          </section>

          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>
              <Shield size={18} />
              <span>Contextual Guardrails</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', margin: 0 }}>
              We've implemented a non-partisan prompt engineering layer. Any queries requesting political bias or candidate opinions are automatically redirected to official Election Commission resources to maintain neutrality.
            </p>
          </section>

          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>
              <Info size={18} />
              <span>Transparency Note</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', margin: 0 }}>
              This tool is designed for educational purposes. It uses a structured prompt chain to translate complex election laws into digestible, actionable workflows for citizens.
            </p>
          </section>
        </div>

        <button 
          onClick={onClose}
          style={{
            marginTop: '2rem',
            width: '100%',
            padding: '0.75rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default AboutModal;
