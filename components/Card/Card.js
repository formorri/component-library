import styles from './Card.module.scss';
import React from 'react'

const Card = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Card