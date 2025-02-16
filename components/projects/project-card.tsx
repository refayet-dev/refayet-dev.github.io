'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProjectModal } from './project-modal';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  longDescription?: string;
  features?: string[];
  externalModalControl?: boolean;  // Add this to determine if modal is controlled externally
  onModalOpen?: () => void;        // Make these optional
  onModalClose?: () => void;
}

export function ProjectCard(project: ProjectCardProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const { externalModalControl, onModalOpen, onModalClose, ...projectData } = project;

  const handleModalOpen = () => {
    if (externalModalControl && onModalOpen) {
      onModalOpen();
    } else {
      setInternalModalOpen(true);
    }
  };

  const handleModalClose = () => {
    if (externalModalControl && onModalClose) {
      onModalClose();
    } else {
      setInternalModalOpen(false);
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Card 
          className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          onClick={handleModalOpen}
        >
          <div className="w-full h-full bg-muted">
            {project.imageUrl && (
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-fill"
              />
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline">+{project.technologies.length - 3}</Badge>
              )}
            </div>
          </div>
        </Card>
      </motion.div>

      <ProjectModal
         isOpen={externalModalControl ? false : internalModalOpen}
         onClose={handleModalClose}
         project={projectData}
      />
    </>
  );
}