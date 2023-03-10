import styles from './Button1.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';

const Button1 = ({ link, text, backgroundColor, textColor }) => {
  return (
    <div className={styles['container']}>
      <Link className={styles.link} href={link}>
        <div
          className={styles['inner']}
          style={{ background: backgroundColor }}
        >
          <div className={styles['text']}
            style={{ color: textColor }}
          >
            {text}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Button1
