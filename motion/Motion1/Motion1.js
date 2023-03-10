import styles from './Motion1.module.scss';
import React from 'react'
import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';

const Motion1 = ({ children }) => {
  const { width } = useWindowSize();

  const whileInView = {
    x: width > 768 ? [50, 0] : 0,
    y: width <= 768 ? [50, 0] : 0,
    opacity: [0, 1],
  };

  return (
    <motion.div
      whileInView={whileInView}
      transition={{ duration: 0.8 }}
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};

export default Motion1;
