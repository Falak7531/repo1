import React from 'react';
import styles from './ResultCard.module.css';

export default function ResultCard({ result, isTopResult }) {
  const { title, snippet, score, tags, date } = result;

  let scoreClass = styles.scorePill;
  if (score >= 0.90) scoreClass = `${styles.scorePill} ${styles.scoreHigh}`;
  else if (score >= 0.75) scoreClass = `${styles.scorePill} ${styles.scoreMed}`;

  return (
    <div className={`${styles.card} ${isTopResult ? styles.topResult : ''}`}>
      <div className={styles.headerRow}>
        <h3 className={styles.title}>{title}</h3>
        <span className={scoreClass}>
          {(score * 100).toFixed(1)}%
        </span>
      </div>
      <p className={styles.snippet}>{snippet}</p>
      
      <div className={styles.metaRow}>
        {tags && tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
        <span>•</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
