import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const baseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: '#ffffff'
    },
    outline: {
      backgroundColor: 'transparent',
      border: '2px solid var(--primary)',
      color: 'var(--primary)'
    },
    secondary: {
      backgroundColor: 'var(--secondary)',
      color: 'var(--secondary-text)'
    }
  };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant] }}
      className={`btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
