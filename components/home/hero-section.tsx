'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';



export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-background dark:bg-background hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 hero-content">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto hero-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0599/8277/4320/files/Homepage_my_image2_9ccf86c2-6770-46e3-91c5-2320b9a0133a.png?v=1739740228"
                alt="Profile"
                className="w-full h-full object-cover rounded-full profile-image"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Hey I'm <span className="text-primary">Refayet</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Specializing in A/B Test Development and Shopify Solutions. Building robust,
              scalable applications with modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <Link
                  href="/REFAYET_SIDDIQUE.pdf"
                  download="REFAYET_SIDDIQUE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}