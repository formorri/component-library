import styles from './TabSwitcher.module.scss';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const TabSwitcher = ({tabData}) => {
  const [activeTab, setActiveTab] = useState(false);
  const [activeContent, setActiveContent] = useState(0);
  // when toggleSwitch, active tab change to false
  const toggleSwitch = (index) => {
    setActiveTab(!activeTab);
    setActiveContent(index);
  }

  const content = tabData[activeTab].content;

  return (
    <div className={styles.container}>
      <div>Tab with switcher</div>
      {tabData.map((item, index) => (
        <div className={styles.switch} data-isOn={activeTab} onClick={toggleSwitch}>
          <motion.div
            key={index}
            className={`${styles.handle} ${activeTab === index ? styles.active : ''}`}
            layout
            transition={spring}
          >
            {item.label}
          </motion.div>
        </div>
      ))}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className={styles.content}
          key={activeContent}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TabSwitcher