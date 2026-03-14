import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const sectionLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Layout({ children, activeSection }: { children: React.ReactNode; activeSection?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  function handleSectionClick(id: string) {
    setMobileMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md border-b border-neon-cyan/10 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-neon-cyan neon-text-cyan hover:opacity-80 transition-opacity">
              Sampat Choudhary
            </Link>
            {/* Desktop nav */}
            <div className="hidden md:flex gap-8">
              {sectionLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleSectionClick(link.id)}
                  className={`nav-link hover:text-neon-cyan transition-colors bg-transparent border-none cursor-pointer text-base ${
                    isHome && activeSection === link.id ? 'active text-neon-cyan' : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/blog"
                className={`nav-link hover:text-neon-cyan transition-colors ${
                  location.pathname.startsWith('/blog') ? 'active text-neon-cyan' : 'text-gray-400'
                }`}
              >
                Blog
              </Link>
            </div>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile menu */}
          <div className={`mobile-menu-enter md:hidden ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="flex flex-col gap-4 pt-4 pb-2">
              {sectionLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleSectionClick(link.id)}
                  className={`hover:text-neon-cyan transition-colors py-2 bg-transparent border-none cursor-pointer text-left text-base ${
                    isHome && activeSection === link.id ? 'text-neon-cyan' : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/blog"
                className={`hover:text-neon-cyan transition-colors py-2 ${
                  location.pathname.startsWith('/blog') ? 'text-neon-cyan' : 'text-gray-400'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="border-t border-neon-cyan/10 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sampat Choudhary - Senior Software Engineer</p>
          <p className="text-sm mt-2">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
