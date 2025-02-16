'use client';

import { motion } from 'framer-motion';
import { SkillProgress } from './skill-progress';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  proficiency: number;
  description: string;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

export function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">{category}</h2>
        {skills.map((skill) => (
          <SkillProgress key={skill.name} {...skill} />
        ))}
      </Card>
    </motion.div>
  );
}