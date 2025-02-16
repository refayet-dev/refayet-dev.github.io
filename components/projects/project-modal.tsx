'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    longDescription?: string;
    features?: string[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl h-[100vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        
        {project.imageUrl && (
          <div className="w-full h-full relative overflow-hidden rounded-lg">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-fill w-full h-full"
            />
          </div>
        )}
        
        <div className="space-y-4">
          <p className="text-muted-foreground">{project.longDescription || project.description}</p>
          
          {project.features && (
            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          
          <div className="flex gap-4 pt-4">
            {project.demoUrl && (
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}