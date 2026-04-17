import React, { useState, useEffect } from 'react';
import SearchHero from '../components/search/SearchHero';
import { performSearch } from '../services/searchPipeline';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await performSearch(query);
      setResults(res);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search effect (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ padding: 'var(--space-24)', fontFamily: 'var(--font-family)' }}>
      <SearchHero query={query} setQuery={setQuery} onSearch={handleSearch} />
      
      <div style={{ marginTop: 'var(--space-32)' }}>
        {loading ? (
          <p style={{ color: 'var(--color-text-2)', fontSize: 'var(--text-md)' }}>Searching latent space...</p>
        ) : (
          results.map(res => (
            <div key={res.id} style={{ 
              borderLeft: res.score >= 0.90 ? '2px solid var(--color-primary)' : 'none',
              padding: 'var(--space-12)',
              marginBottom: 'var(--space-16)',
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 1px 3px var(--color-border)'
            }}>
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-heading)', margin: '0 0 var(--space-4) 0' }}>
                {res.title}
                <span style={{ 
                  marginLeft: 'var(--space-8)', 
                  backgroundColor: res.score >= 0.90 ? 'var(--color-primary-light)' : '#f0f0f0',
                  color: res.score >= 0.90 ? 'var(--color-primary-dark)' : 'var(--color-text-2)',
                  padding: '2px 6px', borderRadius: '10px', fontSize: 'var(--text-xs)' 
                }}>
                  {(res.score * 100).toFixed(1)}%
                </span>
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-2)', margin: 0 }}>{res.snippet}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
