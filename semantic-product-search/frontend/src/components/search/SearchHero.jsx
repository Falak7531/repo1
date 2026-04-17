import React from 'react';
import styles from './SearchHero.module.css';

const SUGGESTED_TAGS = ["Vector Databases", "Cosine Similarity", "FAISS vs Pinecone", "Cross-Encoders"];

export default function SearchHero({ query, setQuery, onSearch }) {
  return (
    <div className={styles.heroContainer}>
      <span className={styles.label}>Vector similarity search · Model: text-embedding-3-large</span>
      
      <div className={styles.inputRow}>
        <input 
          type="text" 
          className={styles.input}
          placeholder="Describe what you are looking for..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        />
        <button className={styles.searchButton} onClick={onSearch}>Search</button>
      </div>

      <div className={styles.tagsContainer}>
        {SUGGESTED_TAGS.map(tag => (
          <button 
            key={tag} 
            className={styles.tagPill}
            onClick={() => { setQuery(tag); onSearch(); }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
