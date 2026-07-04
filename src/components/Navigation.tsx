import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wine } from 'lucide-react';
import { siteData } from '../config/siteData';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  return (
    <>
      <header className="navbar-wrapper">
        <div className={`navbar${scrolled ? ' scrolled' : ''}`}>
          <Link to="/" className="nav-logo">
            <Wine size={20} />
            <span>{siteData.name}</span>
          </Link>

          <nav className="nav-links">
            {siteData.navigation.map((link) => (
              <Link key={link.href} to={link.href}>{link.label}</Link>
            ))}
            <Link to="/articles" className="nav-cta">今月の一本</Link>
          </nav>

          <button className="mobile-toggle" onClick={toggleMenu} aria-label="メニュー">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`mobile-overlay${isOpen ? ' open' : ''}`}>
        {siteData.navigation.map((link) => (
          <Link key={link.href} to={link.href}>{link.label}</Link>
        ))}
        <Link to="/articles" className="nav-cta" style={{ marginTop: 16, padding: '14px 40px' }}>今月の一本</Link>
      </div>
    </>
  );
};
