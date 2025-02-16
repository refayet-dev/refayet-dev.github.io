'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>About Me</h3>
            <p>
              JavaScript developer with expertise in test development and Shopify customization.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="links">
              <Link href="/projects">Projects</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="icon" />
              </a>
              <a href="mailto:contact@example.com">
                <Mail className="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {currentYear} Refayet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}