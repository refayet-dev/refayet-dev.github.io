'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface SkillProgressProps {
  name: string;
  proficiency: number;
  description: string;
}

export function SkillProgress({ name, proficiency, description }: SkillProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{name}</h3>
        <span className="text-sm text-muted-foreground">{proficiency}%</span>
      </div>
      <Progress value={proficiency} className="h-2" />
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </motion.div>
  );
}