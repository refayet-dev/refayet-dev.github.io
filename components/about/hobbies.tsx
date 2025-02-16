'use client';

import { motion } from 'framer-motion';
import { Book, Code, Gamepad, Music, Camera, Plane } from 'lucide-react';

const hobbies = [
  {
    icon: Code,
    name: 'Open Source',
    description: 'Contributing to and maintaining open source projects'
  },
  {
    icon: Book,
    name: 'Reading',
    description: 'Technical books and sci-fi novels'
  },
  {
    icon: Gamepad,
    name: 'Gaming',
    description: 'Strategy and RPG games'
  },
  {
    icon: Music,
    name: 'Music',
    description: 'Playing guitar and producing electronic music'
  },
  {
    icon: Camera,
    name: 'Photography',
    description: 'Street and landscape photography'
  },
  {
    icon: Plane,
    name: 'Traveling',
    description: 'Exploring new places and cultures'
  }
];

export function Hobbies() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Beyond Coding</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 rounded-lg bg-card border text-center"
          >
            <hobby.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-1">{hobby.name}</h3>
            <p className="text-sm text-muted-foreground">{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}