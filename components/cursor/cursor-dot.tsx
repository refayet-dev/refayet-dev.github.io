'use client';

import { motion } from 'framer-motion';
import { CursorProps } from './types';

export function CursorDot({ position, theme }: CursorProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
        mass: 0.2
      }}
    >
      <motion.div
        className={`rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
        style={{
          width: '4px',
          height: '4px',
          marginLeft: '-2px',
          marginTop: '-2px',
          opacity: 0.8
        }}
      />
    </motion.div>
  );
}