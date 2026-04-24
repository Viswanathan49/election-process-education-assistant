import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

const timeline = [
  { id: 1, date: 'Jan 2026', title: 'Bihar Assembly Elections Announced', status: 'confirmed', icon: 'check', detail: 'ECI officially notified election schedule for Bihar state assembly.' },
  { id: 2, date: 'Feb 2026', title: 'Voter Registration Deadline – Bihar', status: 'confirmed', icon: 'check', detail: 'Last date to register or update details on the electoral roll for Bihar.' },
  { id: 3, date: 'Mar 2026', title: 'West Bengal By-Elections', status: 'confirmed', icon: 'check', detail: 'By-elections scheduled for 3 assembly constituencies.' },
  { id: 4, date: 'Apr 2026', title: 'Model Code of Conduct Active', status: 'confirmed', icon: 'check', detail: 'MCC kicks in from the date of election notification, restricting political activities.' },
  { id: 5, date: 'May 2026', title: 'Tamil Nadu Local Body Elections', status: 'expected', icon: 'clock', detail: 'Expected based on 5-year cycle. Official dates not yet notified by SIEC.' },
  { id: 6, date: 'Jun 2026', title: 'Kerala Assembly Elections', status: 'expected', icon: 'clock', detail: 'Due as per constitutional schedule. ECI expected to notify by Q1 2026.' },
  { id: 7, date: 'Q3 2026', title: 'Assam & Tripura Elections', status: 'tbd', icon: 'alert', detail: 'Estimated window based on current term expiry. Subject to official confirmation.' },
  { id: 8, date: 'Q4 2026', title: 'Goa Municipal Elections', status: 'tbd', icon: 'alert', detail: 'To be confirmed by the State Election Commission of Goa.' }
];

const statusConfig = {
  confirmed: { color: '#059669', label: 'Confirmed', bgColor: 'rgba(5, 150, 105, 0.1)' },
  expected:  { color: '#d97706', label: 'Expected',  bgColor: 'rgba(217, 119, 6, 0.1)' },
  tbd:       { color: '#6b7280', label: 'TBD',       bgColor: 'rgba(107, 114, 128, 0.1)' }
};

const ElectionTimelineDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Drawer */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0, bottom: 0,
        width: 'min(480px, 95vw)',
        backgroundColor: 'var(--bg-color)',
        borderLeft: '1px solid var(--border-color)',
        zIndex: 999,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden'
      }}>
        {/* Drawer Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.5rem', borderBottom: '1px solid var(--border-color)',
          background: 'var(--card-bg)', flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Calendar color="var(--primary)" size={24} />
            <div>
              <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-color)' }}>
                2026 Election Timeline
              </h2>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--secondary-text)' }}>
                Mock data — verify on eci.gov.in
              </p>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--secondary-text)', padding: '0.25rem', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'color 0.2s'
          }}>
            <X size={22} />
          </button>
        </div>

        {/* Status Legend */}
        <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', flexShrink: 0, flexWrap: 'wrap' }}>
          {Object.entries(statusConfig).map(([key, cfg]) => (
            <span key={key} style={{
              fontSize: '0.75rem', fontWeight: '600',
              color: cfg.color, backgroundColor: cfg.bgColor,
              padding: '0.2rem 0.6rem', borderRadius: '1rem'
            }}>{cfg.label}</span>
          ))}
        </div>

        {/* Timeline Scroll Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '5.5rem', top: 0, bottom: 0,
              width: '2px', backgroundColor: 'var(--border-color)'
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timeline.map((item, idx) => {
                const cfg = statusConfig[item.status];
                return (
                  <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    {/* Date */}
                    <div style={{ width: '4.5rem', flexShrink: 0, textAlign: 'right', paddingTop: '0.15rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--secondary-text)' }}>
                        {item.date}
                      </span>
                    </div>

                    {/* Icon */}
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '50%',
                      backgroundColor: cfg.bgColor, border: `2px solid ${cfg.color}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, zIndex: 1, marginTop: '0.1rem'
                    }}>
                      {item.icon === 'check' && <CheckCircle2 size={13} color={cfg.color} />}
                      {item.icon === 'clock' && <Clock size={13} color={cfg.color} />}
                      {item.icon === 'alert' && <AlertTriangle size={13} color={cfg.color} />}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                        <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-color)' }}>
                          {item.title}
                        </h3>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: '700',
                          color: cfg.color, backgroundColor: cfg.bgColor,
                          padding: '0.1rem 0.5rem', borderRadius: '1rem'
                        }}>{cfg.label}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--secondary-text)', lineHeight: '1.5' }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Disclaimer Footer */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid var(--border-color)',
          backgroundColor: 'var(--card-bg)',
          fontSize: '0.8rem', color: 'var(--secondary-text)',
          flexShrink: 0
        }}>
          ⚠️ This timeline uses <strong>mock educational data</strong>. Always verify election dates on the official 
          <a href="https://eci.gov.in/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', marginLeft: '0.25rem' }}>ECI website</a>.
        </div>
      </div>
    </>
  );
};

export default ElectionTimelineDrawer;
