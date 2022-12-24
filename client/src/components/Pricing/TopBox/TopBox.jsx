import React from 'react';
import styles from './TopBox.module.sass'

export function TopBox({ tier, memo, price }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{tier}</h3>
      <p className={styles.memo}>{memo}</p>
      <p className={styles.price}>US${price}</p>
    </div>
  );
}
