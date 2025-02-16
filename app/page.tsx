'use client';

import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { ServicesSection } from '@/components/home/services-section';
import { ProjectSlider } from '@/components/home/project-slider';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <section className="py-16">
        <h2 className=".text-primary-foreground text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <ProjectSlider />
      </section>
    </div>
  );
}