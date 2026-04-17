import faiss
import numpy as np

# Default dimension for models like all-MiniLM-L6-v2 is 384
DIMENSION = 384 
index = faiss.IndexFlatL2(DIMENSION)

def build_index(embeddings):
    """Build FAISS index from a list of embeddings."""
    global index
    if not embeddings:
        return
    
    # Convert to float32 numpy array as required by FAISS
    vectors = np.array(embeddings).astype('float32')
    index.add(vectors)

def search_index(query_embedding, top_k=5):
    """Search the FAISS index and return distances and indices."""
    if index.ntotal == 0:
        return [], []
        
    vector = np.array([query_embedding]).astype('float32')
    distances, indices = index.search(vector, top_k)
    
    return distances[0], indices[0]
