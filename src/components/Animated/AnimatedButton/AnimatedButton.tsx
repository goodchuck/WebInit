'use client';

import { Button, ButtonProps } from 'antd';
import { motion, Variants } from 'framer-motion';
import React from 'react';

interface AnimatedButtonProps extends ButtonProps {
  variants: Variants;
}

function AnimatedButton({
  variants,
  children,
  type,
  onClick,
  style,
  ...restProps
}: AnimatedButtonProps) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Button
        type={type}
        onClick={onClick}
        style={style}
      // {...restProps}
      >
        {children}
      </Button>
    </motion.div>
  );
}

export default AnimatedButton;
