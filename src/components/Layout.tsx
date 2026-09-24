import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Menu, X } from 'lucide-react';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];

export default function Layout({
  children,
  activeSection,
}: {
  children: React.ReactNode;
  activeSection?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
      if (target) {
        target.scrollIntoView();
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.getElementById('main')?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  return (
    <div className="site-shell">
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('main')?.focus();
        }}
      >
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <Link
            className="brand"
            to="/"
            aria-label="Sampat Choudhary, home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="monogram" aria-hidden="true">
              s<span>.</span>
            </span>
            <span>
              Sampat Choudhary<span className="brand-dot">.</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(({ id, label }) => (
              <Link
                key={id}
                to={`/#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/blog"
              aria-current={location.pathname.startsWith('/blog') ? 'page' : undefined}
            >
              Writing
            </Link>
          </nav>
          <Link to="/#contact" className="nav-contact">
            Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav container"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          {links.map(({ id, label }) => (
            <Link key={id} to={`/#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Writing
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer container">
        <Link className="footer-brand" to="/">
          Sampat Choudhary<span className="accent">.</span>
        </Link>
        <span className="footer-note">Thoughtfully engineered. Always evolving.</span>
        <div className="footer-links">
          <a
            href="https://github.com/pilot617"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/sampat-choudhary-996b75155/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
