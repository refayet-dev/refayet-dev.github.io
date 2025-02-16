'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import './header.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 0);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${visible ? '' : 'hidden'}`}>
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            <Code2 className="icon" />
            <span>Refayet-dev</span>
          </Link>

          <div className="desktop-nav">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="mobile-nav">
            <button
              className="menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="icon" />
              ) : (
                <Menu className="icon" />
              )}
            </button>

            {isMobileMenuOpen && (
              <div className="mobile-menu">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`nav-link  ${pathname === href ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <ThemeToggle />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}