'use client';

import { useTheme } from 'next-themes';
import { CursorRing } from './cursor-ring';
import { CursorDot } from './cursor-dot';
import { useCursor } from './use-cursor';

export function AnimatedCursor() {
  const { theme } = useTheme();
  const { position, isPointer } = useCursor();

  return (
    <>
      <CursorRing position={position} isPointer={isPointer} theme={theme} />
      <CursorDot position={position} theme={theme} />
    </>
  );
}