import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Landmark, Info, Newspaper, Bell } from 'lucide-react';
import AboutModal from './AboutModal';
import ElectionTimelineDrawer from './ElectionTimelineDrawer';
import NewsTicker from './NewsTicker';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const news = [
    { id: 1, title: 'Voter registration drive starts next week', date: '2 hours ago' },
    { id: 2, title: 'New polling stations announced in Zone A', date: '5 hours ago' },
    { id: 3, title: 'ECI launches new voter awareness app', date: 'Yesterday' }
  ];

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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-color)' }}>
      <header className="glass" style={{ 
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
              onClick={() => setAboutOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)', display: 'flex' }}
              title="About this AI"
            >
              <Info size={20} />
            </button>
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

      <NewsTicker />

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="glass" style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
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

      <div className="container" style={{ flex: 1, display: 'flex', gap: '2rem', padding: '2rem 1rem' }}>
        <main style={{ flex: 1 }} className="animate-fade-in">
          <Outlet />
        </main>

        {/* Sidebar - Desktop Only */}
        <aside className="desktop-sidebar glass" style={{ 
          width: '300px', 
          padding: '1.5rem', 
          borderRadius: '1rem', 
          height: 'fit-content',
          display: 'none',
          position: 'sticky',
          top: '100px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            <Newspaper size={20} />
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Election News</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {news.map(item => (
              <div key={item.id} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '500', lineHeight: '1.4', marginBottom: '0.25rem' }}>{item.title}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--secondary-text)', fontSize: '0.75rem' }}>
                  <Bell size={12} />
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            style={{ 
              marginTop: '1.5rem', 
              width: '100%', 
              padding: '0.5rem', 
              background: 'none', 
              border: '1px solid var(--primary)', 
              color: 'var(--primary)', 
              borderRadius: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.target.style.backgroundColor = 'var(--primary)'; e.target.style.color = 'white'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--primary)'; }}
          >
            View All Updates →
          </button>
        </aside>
      </div>

      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ElectionTimelineDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <footer style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)', padding: '2rem 1rem', textAlign: 'center', color: 'var(--secondary-text)' }}>
        <p>Built for PromptWars Hackathon by <a href="https://www.linkedin.com/in/viswanathan-sivakumar" target="_blank" rel="noreferrer">Viswanathan S</a>.</p>
      </footer>
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (min-width: 1024px) {
          .desktop-sidebar { display: block !important; }
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
