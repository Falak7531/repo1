from fastapi import APIRouter
from app.models.schema import SearchRequest, ProductResponse
from app.services.search_engine import query_products
from typing import List

router = APIRouter()

@router.post("/", response_model=List[ProductResponse])
def search(request: SearchRequest):
    """Perform semantic product search."""
    results = query_products(request.query, request.top_k)
    return results
