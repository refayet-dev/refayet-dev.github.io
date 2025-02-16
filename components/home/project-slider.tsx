'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/lib/data/projects';
import { ProjectCard } from '@/components/projects/project-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const startAutoplay = () => {
    if (!isHovered && !modalOpen) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
      }, 3000);
    }
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [isHovered, modalOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  return (
    <div 
      className="project-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="slider-content"
      >
        <ProjectCard 
          {...projectsData[currentIndex]}
          externalModalControl={true}
          onModalOpen={() => setModalOpen(true)}
          onModalClose={() => setModalOpen(false)}
        />
      </motion.div> 
      </AnimatePresence>

      <button 
        className="nav-button prev"
        onClick={handlePrevious}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        className="nav-button next"
        onClick={handleNext}
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}