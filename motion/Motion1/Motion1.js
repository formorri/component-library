import styles from './Motion1.module.scss';
import React from 'react'
import { motion } from 'framer-motion';
import { windowDimensions } from '../../hooks';

const Motion1 = ({ children }) => {
  const { height, width } = windowDimensions();

  const isMobile = width < 768; // adjust breakpoint as needed
  const x = isMobile ? undefined : [50, 0];
  const y = isMobile ? [50, 0] : undefined;

  const variants = {
    desktop: {
      x,
      opacity: [0, 1],
      transition: { duration: 0.8 }
    },
    mobile: {
      y,
      opacity: [0, 1],
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};

export default Motion1;
