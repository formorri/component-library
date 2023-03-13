import styles from './Accordion1.module.scss';
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion1 = ({ accordionData }) => {
  const [active, setActive] = useState(0)
  return (
    <div className={styles.container}>
      <div>
        Normal Accordion
      </div>
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={styles.wrapper}
          >
            <div className={styles.title}>
              {item.title}
              <KeyboardArrowDownIcon
                className={`${styles.arrow} ${active === index ? styles['arrow-active'] : ''}`}
                onClick={() => {
                  setActive(active === index ? null : index)
                }}
              />
            </div>
            <div
              className={`${styles.content} ${active === index ? styles['content-active'] : ''}`}
            >
              {item.content}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Accordion1