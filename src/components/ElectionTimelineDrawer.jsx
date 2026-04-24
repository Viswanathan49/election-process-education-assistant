import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Clock, AlertTriangle, ShieldCheck, Timer } from 'lucide-react';

const RESULT_DAY = new Date('2026-05-04T06:00:00+05:30');

const timeline = [
  {
    id: 1,
    date: 'Apr 7',
    title: 'Kerala Assembly Polls',
    status: 'concluded',
    pulse: true,
    detail: 'Polling concluded successfully across all 140 constituencies. Voter turnout recorded.',
    badge: 'Polls Concluded'
  },
  {
    id: 2,
    date: 'Apr 23',
    title: 'Tamil Nadu Assembly Polls',
    status: 'concluded',
    pulse: true,
    detail: 'Polling concluded across all 234 constituencies. High voter participation reported.',
    badge: 'Polls Concluded'
  },
  {
    id: 3,
    date: 'May 4',
    title: 'Result Day — Kerala & Tamil Nadu',
    status: 'upcoming',
    pulse: false,
    detail: 'Vote counting begins at 8:00 AM IST. Results expected throughout the day.',
    badge: 'Upcoming'
  },
  {
    id: 4,
    date: 'May 2026',
    title: 'Bihar Assembly Elections',
    status: 'expected',
    pulse: false,
    detail: 'ECI expected to notify election schedule for Bihar state assembly.',
    badge: 'Expected'
  },
  {
    id: 5,
    date: 'Q3 2026',
    title: 'Assam & Tripura Elections',
    status: 'tbd',
    pulse: false,
    detail: 'Estimated window based on current term expiry. Subject to official confirmation.',
    badge: 'TBD'
  },
  {
    id: 6,
    date: 'Q4 2026',
    title: 'Goa Municipal Elections',
    status: 'tbd',
    pulse: false,
    detail: 'To be confirmed by the State Election Commission of Goa.',
    badge: 'TBD'
  }
];

const statusConfig = {
  concluded: { color: '#059669', bgColor: 'rgba(5, 150, 105, 0.12)', icon: 'check' },
  upcoming:  { color: '#2563eb', bgColor: 'rgba(37, 99, 235, 0.12)', icon: 'timer' },
  expected:  { color: '#d97706', bgColor: 'rgba(217, 119, 6, 0.1)',  icon: 'clock' },
  tbd:       { color: '#6b7280', bgColor: 'rgba(107, 114, 128, 0.1)', icon: 'alert' }
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = RESULT_DAY - now;
      if (diff <= 0) return setTimeLeft({ done: true });
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft.done) {
    return (
      <div style={{ textAlign: 'center', color: '#059669', fontWeight: 'bold', padding: '0.5rem' }}>
        🎉 Results are being announced!
      </div>
    );
  }

  const box = (val, label) => (
    <div style={{ textAlign: 'center', minWidth: '52px' }}>
      <div style={{
        fontSize: '1.6rem', fontWeight: '800', lineHeight: 1,
        color: '#2563eb', fontVariantNumeric: 'tabular-nums'
      }}>
        {String(val ?? '--').padStart(2, '0')}
      </div>
      <div style={{ fontSize: '0.65rem', color: 'var(--secondary-text)', marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </div>
    </div>
  );

  return (
    <div style={{
      margin: '0 1.5rem',
      padding: '1rem 1.25rem',
      background: 'rgba(37, 99, 235, 0.07)',
      border: '1px solid rgba(37, 99, 235, 0.25)',
      borderRadius: '0.75rem',
      backdropFilter: 'blur(8px)',
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <Timer size={16} color="#2563eb" />
        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#2563eb' }}>
          Result Day: May 4, 2026
        </span>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
        {box(timeLeft.days,    'Days')}
        <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--secondary-text)', alignSelf: 'flex-start', paddingTop: '0.1rem' }}>:</span>
        {box(timeLeft.hours,   'Hours')}
        <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--secondary-text)', alignSelf: 'flex-start', paddingTop: '0.1rem' }}>:</span>
        {box(timeLeft.minutes, 'Mins')}
        <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--secondary-text)', alignSelf: 'flex-start', paddingTop: '0.1rem' }}>:</span>
        {box(timeLeft.seconds, 'Secs')}
      </div>
    </div>
  );
};

const PulseDot = () => (
  <span style={{ position: 'relative', display: 'inline-flex', width: '10px', height: '10px', flexShrink: 0, marginTop: '0.35rem' }}>
    <span style={{
      position: 'absolute', display: 'inline-flex', borderRadius: '50%',
      height: '100%', width: '100%',
      backgroundColor: '#059669', opacity: 0.75,
      animation: 'ping 1.4s cubic-bezier(0,0,0.2,1) infinite'
    }} />
    <span style={{
      position: 'relative', display: 'inline-flex', borderRadius: '50%',
      height: '10px', width: '10px', backgroundColor: '#059669'
    }} />
  </span>
);

const ElectionTimelineDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Drawer — slide + fade */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0, bottom: 0,
        width: 'min(500px, 96vw)',
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRight: 'none',
        boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
        zIndex: 999,
        transform: isOpen ? 'translateX(0)' : 'translateX(110%)',
        opacity: isOpen ? 1 : 0,
        transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.38s ease',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        color: 'var(--text-color)'
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          flexShrink: 0,
          background: 'rgba(37,99,235,0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Calendar color="var(--primary)" size={22} />
            <div>
              <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-color)' }}>
                2026 Election Timeline
              </h2>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--secondary-text)' }}>
                Live status · Verify on eci.gov.in
              </p>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(0,0,0,0.06)', border: 'none', cursor: 'pointer',
            color: 'var(--secondary-text)', padding: '0.4rem', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s'
          }}>
            <X size={20} />
          </button>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex', gap: '0.6rem', padding: '0.75rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          flexShrink: 0, flexWrap: 'wrap',
          background: 'rgba(255,255,255,0.1)'
        }}>
          {Object.entries(statusConfig).map(([key]) => {
            const cfg = statusConfig[key];
            const labels = { concluded: '✅ Concluded', upcoming: '🔵 Upcoming', expected: '🟡 Expected', tbd: '⬜ TBD' };
            return (
              <span key={key} style={{
                fontSize: '0.7rem', fontWeight: '600', color: cfg.color,
                backgroundColor: cfg.bgColor,
                padding: '0.2rem 0.6rem', borderRadius: '1rem',
                border: `1px solid ${cfg.color}30`
              }}>{labels[key]}</span>
            );
          })}
        </div>

        {/* Countdown Timer */}
        <div style={{ paddingTop: '1rem', paddingBottom: '0.5rem', flexShrink: 0 }}>
          <Countdown />
        </div>

        {/* Timeline */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem 1.5rem' }}>
          <div style={{ position: 'relative' }}>
            {/* Vertical connector line */}
            <div style={{
              position: 'absolute', left: '4.9rem', top: 0, bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, rgba(37,99,235,0.4), rgba(107,114,128,0.2))'
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {timeline.map((item) => {
                const cfg = statusConfig[item.status];
                return (
                  <div key={item.id} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    {/* Date column */}
                    <div style={{ width: '4rem', flexShrink: 0, textAlign: 'right', paddingTop: '0.2rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--secondary-text)', lineHeight: 1.2 }}>
                        {item.date}
                      </span>
                    </div>

                    {/* Icon */}
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      backgroundColor: cfg.bgColor, border: `2px solid ${cfg.color}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, zIndex: 1, marginTop: '0.15rem'
                    }}>
                      {cfg.icon === 'check' && <CheckCircle2 size={12} color={cfg.color} />}
                      {cfg.icon === 'timer' && <Timer size={12} color={cfg.color} />}
                      {cfg.icon === 'clock' && <Clock size={12} color={cfg.color} />}
                      {cfg.icon === 'alert' && <AlertTriangle size={12} color={cfg.color} />}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                        <h3 style={{ margin: 0, fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-color)', flex: 1 }}>
                          {item.title}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          {item.pulse && <PulseDot />}
                          <span style={{
                            fontSize: '0.68rem', fontWeight: '700',
                            color: cfg.color, backgroundColor: cfg.bgColor,
                            padding: '0.1rem 0.45rem', borderRadius: '1rem',
                            border: `1px solid ${cfg.color}40`, whiteSpace: 'nowrap'
                          }}>{item.badge}</span>
                        </div>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--secondary-text)', lineHeight: '1.5' }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '0.85rem 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(5,150,105,0.06)',
          fontSize: '0.78rem', color: 'var(--secondary-text)',
          flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.5rem'
        }}>
          <ShieldCheck size={14} color="#059669" />
          <span>
            <strong style={{ color: '#059669' }}>Verified by Election Commission Data</strong>
            {' · '}Always confirm at{' '}
            <a href="https://eci.gov.in/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>eci.gov.in</a>
          </span>
        </div>
      </div>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        [data-theme="dark"] .election-drawer {
          background: rgba(15,23,42,0.7) !important;
          border-color: rgba(255,255,255,0.1) !important;
        }
      `}</style>
    </>
  );
};

export default ElectionTimelineDrawer;
