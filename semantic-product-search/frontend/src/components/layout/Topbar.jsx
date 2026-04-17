import React from 'react';
import styles from './Topbar.module.css';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.title}>Vector Store Operations</div>
      <div className={styles.rightSide}>
        {/* Placeholder for IconButtons */}
        <span>🔔</span> 
        <span>⚙️</span>
      </div>
    </div>
  );
}
