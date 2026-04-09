import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isSecondary, setIsSecondary] = useState(false);
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"]');
      setIsHovering(!!isClickable);
      
      // Check if it's a secondary color trigger (optional refinement)
      if (isClickable && target.classList.contains('secondary-trigger')) {
        setIsSecondary(true);
      } else {
        setIsSecondary(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white/50 pointer-events-none z-[9999] mix-blend-difference bg-bg"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? (isSecondary ? '#00aaff' : '#eaff00') : '#ffffff',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250 }}
    />
  );
};
