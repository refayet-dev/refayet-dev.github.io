'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLinks } from './nav-links';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:hidden" ref={menuRef}>
      <Button className="mt-[13px]" variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      
      {isOpen && (
        <div className="mobile-menu">
          <nav className="flex flex-col space-y-1 pl-6">
            <NavLinks />
            <div className="theme-toggle-wrapper">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}