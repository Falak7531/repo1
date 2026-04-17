const MOCK_DOCS = [
  { id: 1, title: "Understanding Vector Embeddings", snippet: "A deep dive into how high-dimensional vectors represent semantic meaning in LLMs like text-embedding-ada-002.", tags: ["ML", "Embeddings"], date: "2023-10-01" },
  { id: 2, title: "Optimizing FAISS for Billion-Scale Search", snippet: "Techniques for using IVF and PQ to compress indexes and speed up approximate nearest neighbor (ANN) retrieval.", tags: ["Systems", "Performance"], date: "2023-09-15" },
  { id: 3, title: "Cross-Encoder Re-ranking Strategies", snippet: "Using a secondary interaction model to adjust cosine similarity scores for top-K retrieved documents improves recall.", tags: ["ML", "Ranking"], date: "2023-11-02" }
];

// TODO: Implement actual batched API calls and caching (LRU, 500-entry limit)
export async function performSearch(query, { topK = 10, rerank = false } = {}) {
  // Simulate network latency (200ms P95 expected with reranking)
  await new Promise(resolve => setTimeout(resolve, 150));
  
  if (!query) return MOCK_DOCS.map(doc => ({ ...doc, score: 0.95 }));

  const lowerQuery = query.toLowerCase();
  
  // Mock cosine similarity scoring based on basic text matching
  return MOCK_DOCS.map(doc => {
    let score = 0.5; // Base fallback
    if (doc.title.toLowerCase().includes(lowerQuery)) score += 0.4;
    if (doc.snippet.toLowerCase().includes(lowerQuery)) score += 0.2;
    
    // Cap score at 0.99
    return { ...doc, score: Math.min(score, 0.99) };
  })
  .filter(doc => doc.score > 0.55) 
  .sort((a, b) => b.score - a.score)
  .slice(0, topK);
}
