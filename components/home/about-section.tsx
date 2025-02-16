'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-muted-foreground text-3xl font-bold mb-6 ">Who Am I?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experienced Software Engineer with expertise in JavaScript, React, Node.js, and Shopify Liquid. Focused on performance optimization, A/B testing, and creating data-driven digital experiences.
          </p>
          <Button asChild>
            <Link href="/about">Explore More About Me</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}