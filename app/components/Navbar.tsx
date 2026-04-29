import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { clsx } from 'clsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Xizmatlar', path: '/services' },
    { name: 'Ustalar', path: '/experts' },
    { name: 'Galereya', path: '/gallery' },
    { name: 'Bog\'lanish', path: '/contact' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12',
        isScrolled
          ? 'bg-brand-dark/90 backdrop-blur-md py-3 shadow-lg border-b border-brand-gold/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-white hover:text-brand-gold transition-colors uppercase"
        >
          Lumiere
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative group',
                    isActive ? 'text-brand-gold' : 'text-white/80 hover:text-brand-gold'
                  )
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-outline !py-2 !px-6 !text-xs">
            Yozilish
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 top-[68px] bg-brand-dark transition-all duration-500 ease-in-out transform',
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg uppercase tracking-[0.3em] text-white hover:text-brand-gold transition-colors"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="mt-4">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary"
            >
              Yozilish
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
