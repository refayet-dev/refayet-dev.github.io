'use client';

import { motion } from 'framer-motion';
import { AboutHero } from '@/components/about/about-hero';
import { AboutDetails } from '@/components/about/about-details';
import { Hobbies } from '@/components/about/hobbies';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutHero />
        <AboutDetails />
        <Hobbies />
      </motion.div>
    </div>
  );
}