import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoArea}>
        <span>Semantic UI</span>
      </div>
      <div className={styles.nav}>
        <div className={styles.sectionLabel}>Search</div>
        <div className={`${styles.navItem} ${styles.active}`}>
          <span>🔍 Search Engine</span>
        </div>
        <div className={styles.sectionLabel}>Management</div>
        <div className={styles.navItem}>
          <span>🗂 Indexes</span>
        </div>
        <div className={styles.navItem}>
          <span>📊 Analytics</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.avatar}>FM</div>
        <div>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: '500' }}>Falak</div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-3)' }}>Admin</div>
        </div>
      </div>
    </div>
  );
}
