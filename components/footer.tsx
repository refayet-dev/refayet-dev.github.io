'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/refayet-dev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/refayet-siddique/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/Rifat.siddque/', label: 'Facebook' },
  { icon: Mail, href: 'mailto:refayet0096@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t mt-auto bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground">
            Passionate Software Engineer specializing in web development, Shopify customization, and performance optimization. Building scalable, user-centric solutions with modern technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Refayet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}