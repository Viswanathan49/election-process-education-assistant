import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Landmark } from 'lucide-react';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  useEffect(() => {
    const titles = {
      '/': 'Election Assistant | Home',
      '/eligibility': 'Election Assistant | Eligibility',
      '/upcoming': 'Election Assistant | Upcoming Elections',
      '/workflow': 'Election Assistant | Workflow',
      '/forms': 'Election Assistant | Forms',
      '/assistant': 'Election Assistant | Assistant',
      '/basics': 'Election Assistant | Election Basics',
      '/resources': 'Election Assistant | Resources'
    };
    
    document.title = titles[location.pathname] || 'Election Assistant';
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Eligibility', path: '/eligibility' },
    { name: 'Upcoming', path: '/upcoming' },
    { name: 'Workflow', path: '/workflow' },
    { name: 'Forms', path: '/forms' },
    { name: 'Assistant', path: '/assistant' },
    { name: 'Basics', path: '/basics' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ 
        backgroundColor: 'var(--nav-bg)', 
        borderBottom: '1px solid var(--border-color)',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--text-color)' }}>
            <Landmark style={{ color: 'var(--primary)' }} />
            <span>Process Assistant</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    style={({ isActive }) => ({
                      color: isActive ? 'var(--primary)' : 'var(--text-color)',
                      fontWeight: isActive ? '600' : '400',
                    })}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)', display: 'flex' }}
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-toggle"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)', display: 'none' }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav style={{ backgroundColor: 'var(--card-bg)', padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  style={({ isActive }) => ({
                    display: 'block',
                    color: isActive ? 'var(--primary)' : 'var(--text-color)',
                    fontWeight: isActive ? '600' : '400',
                  })}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <main style={{ flex: 1, padding: '2rem 0' }} className="container animate-fade-in">
        <Outlet />
      </main>

      <footer style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)', padding: '2rem 1rem', textAlign: 'center', color: 'var(--secondary-text)' }}>
        <p>Built for PromptWars Hackathon by <a href="https://www.linkedin.com/in/viswanathan-sivakumar" target="_blank" rel="noreferrer">Viswanathan S</a>.</p>
      </footer>
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </div>
  );
};

export default Layout;
