'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { NavLinks } from '@/components/navigation/nav-links';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  return (
    <>
      <div className="h-16" /> {/* Spacer for fixed header */}
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-background',
        visible ? 'translate-y-0' : '-translate-y-full'
      )}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6" />
              <Link href="/" className="text-xl font-bold">
                Refayet-dev
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <NavLinks />
              <ThemeToggle />
            </div>

            <MobileNav />
          </div>
        </nav>
      </header>
    </>
  );
}