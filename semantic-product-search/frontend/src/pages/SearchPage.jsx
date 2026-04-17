import React, { useState, useEffect } from 'react';
import SearchHero from '../components/search/SearchHero';
import ResultCard from '../components/search/ResultCard';
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
          results.map((res, index) => (
            <ResultCard key={res.id} result={res} isTopResult={index === 0 && res.score >= 0.90} />
          ))
        )}
      </div>
    </div>
  );
}
