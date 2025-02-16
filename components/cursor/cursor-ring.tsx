'use client';

import { motion } from 'framer-motion';
import { CursorProps } from './types';

export function CursorRing({ position, isPointer, theme }: CursorProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: position.x,
        y: position.y,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }}
    >
      <motion.div
        className={`rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
        animate={{
          width: isPointer ? '40px' : '20px',
          height: isPointer ? '40px' : '20px',
          opacity: 0.5
        }}
        transition={{ duration: 0.2 }}
        style={{
          marginLeft: isPointer ? '-20px' : '-10px',
          marginTop: isPointer ? '-20px' : '-10px'
        }}
      />
    </motion.div>
  );
}