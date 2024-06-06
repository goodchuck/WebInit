'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface AnimatedComponentProps {
  children: React.ReactNode;
  variants: Variants;
}

function AnimatedComponent({ children, variants }: AnimatedComponentProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedComponent;
