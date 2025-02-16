'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


export function AboutHero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden">
          <Image
            src="https://cdn.shopify.com/s/files/1/0599/8277/4320/files/About_my_PIC.png?v=1739738013"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl font-bold mb-4">Refayet Siddique</h1>
        <h2 className="text-2xl  mb-6">Frontend Developer</h2>
        <p className="text-lg leading-relaxed">
          A passionate developer with 3+ years of experience in web development, 
          specializing in A/B testing and Shopify development. I believe in 
          creating robust, scalable solutions that make a real difference in how 
          businesses operate online.
        </p>
      </motion.div>
    </div>
  );
}