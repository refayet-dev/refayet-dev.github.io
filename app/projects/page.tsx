'use client';
import { ProjectCard } from '@/components/projects/project-card';
import { projectsData } from '@/lib/data/projects';
import { useState } from 'react';
import { abtestProjectsData } from '@/lib/data';
import Link from 'next/link';


export default function ProjectsPage() {
  const [activeView, setActiveView] = useState('projects');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveView('projects')}
          className={`px-6 py-2 rounded-lg ${activeView === 'projects'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
            }`}
        >
          Web Projects
        </button>
        <button
          onClick={() => setActiveView('abtest')}
          className={`px-6 py-2 rounded-lg ${activeView === 'abtest'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
            }`}
        >
          CRO Projects
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-8">
        {activeView === 'projects' ? 'Projects' : 'AB Test Clients'}
      </h1>

      {activeView === 'projects' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add your AB Test clients data here */}
          {abtestProjectsData.map((project: { imageUrl: string; name: string; link: string }) => (
            <div className="border rounded-lg relative hover:scale-110">
              <Link href={project.link}>
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 h-full"
                />
                <h3 className="text-xl font-semibold absolute bottom-[10px] left-[10px] p-[10px] backdrop-filter backdrop-brightness-[0.3] text-white">{project.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}