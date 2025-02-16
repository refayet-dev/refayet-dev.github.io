'use client';

import { motion } from 'framer-motion';
import { educationData } from '@/lib/data';   
import { Timeline } from '@/components/timeline/timeline';

export default function EducationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h1>
      <Timeline items={educationData} type="education" />
    </div>
  );
}