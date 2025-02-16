'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import './theme-toggle.scss';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="icon-container">
        <Sun className="icon sun" />
        <Moon className="icon moon" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}