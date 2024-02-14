import React from 'react';
import { motion } from 'framer-motion';

const RevealAnimation = ({ children, initial, animate, exit, transition }) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default RevealAnimation;
