// lib/animations.ts
export const defaultVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: '0%', opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

export const scaleVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

export const rotateVariants = {
  initial: { rotate: 90, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: -90, opacity: 0 },
};
