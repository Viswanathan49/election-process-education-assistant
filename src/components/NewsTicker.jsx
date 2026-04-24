import React, { useEffect, useRef } from 'react';
import { Vote } from 'lucide-react';

const items = [
  "📢 Voter registration for Bihar Assembly Elections closes soon — register on voters.eci.gov.in",
  "🗳️ Model Code of Conduct is active in notified constituencies — check with your local election office",
  "📋 New polling stations announced — verify your booth at voterportal.eci.gov.in",
  "⏰ Apply for postal ballot if you're a service voter or senior citizen",
  "✅ ECI launches new voter awareness initiative — check eci.gov.in for details",
  "🔔 Constituency-wise voter list updates are available on the National Voter's Services Portal"
];

const NewsTicker = () => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let pos = ticker.scrollWidth;
    let animFrame;

    const scroll = () => {
      pos -= 0.5;
      if (pos < -ticker.children[0]?.scrollWidth) {
        pos = ticker.parentElement.clientWidth;
      }
      ticker.style.transform = `translateX(${pos}px)`;
      animFrame = requestAnimationFrame(scroll);
    };

    animFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const fullText = items.join('    •    ');

  return (
    <div style={{
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '0.4rem 0',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0 1rem',
        flexShrink: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: '100%',
        zIndex: 1
      }}>
        <Vote size={14} />
        <span style={{ fontSize: '0.75rem', fontWeight: '700', whiteSpace: 'nowrap' }}>LIVE</span>
      </div>
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <div
          ref={tickerRef}
          style={{
            whiteSpace: 'nowrap',
            fontSize: '0.82rem',
            fontWeight: '500',
            display: 'inline-block',
            willChange: 'transform'
          }}
        >
          {fullText}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
