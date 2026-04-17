from pydantic import BaseModel
from typing import List, Optional

class SearchRequest(BaseModel):
    query: str
    top_k: int = 5

class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    score: Optional[float] = None
