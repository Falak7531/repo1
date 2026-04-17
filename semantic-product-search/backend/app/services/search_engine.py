from app.services.data_loader import load_products
from app.services.embedding import get_embedding
from app.services.vector_store import search_index

def query_products(query: str, top_k: int):
    """Orchestrate the semantic search process."""
    products = load_products()
    # Stub: Normally query vector_store and map back to products
    return products[:top_k]
