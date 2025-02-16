"use client"
import dynamic from 'next/dynamic';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { SkillSearch } from '@/components/skills/skill-search';

// Dynamically import SkillCategory
const SkillCategory = dynamic(() => import('@/components/skills/skill-category').then(mod => mod.SkillCategory), {
  ssr: false
});

// Add type definitions for better type safety
interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  id: string;
  category: string;
  skills: Skill[];
}

export function SkillsContent() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    if (!Array.isArray(skillsData)) return [];

    return skillsData
      .filter((category): category is typeof skillsData[0] => {
        return category && typeof category === 'object' &&
          'skills' in category && Array.isArray(category.skills);
      })
      .map(category => ({
        ...category,
        skills: category.skills.filter(skill =>
          skill?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill?.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }))
      .filter(category => category.skills.length > 0);
  }, [searchQuery]);

  if (!filteredSkills) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <SkillSearch onSearch={setSearchQuery} />
        <div className="grid gap-8 md:grid-cols-2">
          {filteredSkills.map((category) => (
            <SkillCategory
              key={category.id || `category-${category.category}`}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}