'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  variants: Variants;
}

function PageTransition({ children, variants }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -20 }}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
