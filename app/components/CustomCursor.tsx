'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.6 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleDown = () => setActive(true);
    const handleUp = () => setActive(false);

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerdown', handleDown, { passive: true });
    window.addEventListener('pointerup', handleUp, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-glass"
      style={{ translateX: smoothX, translateY: smoothY, scale: active ? 0.88 : 1.02, opacity: active ? 0.78 : 0.92 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.7 }}
    />
  );
}
