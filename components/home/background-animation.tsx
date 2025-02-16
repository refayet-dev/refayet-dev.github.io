'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BackgroundAnimation() {
  const { theme } = useTheme();
  const [circles, setCircles] = useState<Array<{
    id: number;
    cx: number;
    cy: number;
    r: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate circles only on the client side
    setCircles(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        cx: Math.random() * 100,
        cy: Math.random() * 100,
        r: Math.random() * 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }))
    );
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {circles.map(({ id, cx, cy, r, duration, delay }) => (
            <motion.circle
              key={id}
              cx={cx}
              cy={cy}
              r={r}
              fill={theme === 'dark' ? 'white' : 'black'}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}