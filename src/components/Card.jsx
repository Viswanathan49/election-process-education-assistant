import React from 'react';

const Card = ({ children, className = '', hoverable = false }) => {
  const style = {
    backgroundColor: 'var(--card-bg)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid var(--border-color)',
    transition: hoverable ? 'transform 0.2s, box-shadow 0.2s' : 'none',
    cursor: hoverable ? 'pointer' : 'default',
  };

  return (
    <div 
      style={style} 
      className={`card ${hoverable ? 'hoverable' : ''} ${className}`}
      onMouseEnter={(e) => {
        if(hoverable) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        }
      }}
      onMouseLeave={(e) => {
        if(hoverable) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        }
      }}
    >
      {children}
    </div>
  );
};

export default Card;
