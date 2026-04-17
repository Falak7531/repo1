from fastapi import FastAPI
from app.routes.search import router as search_router

app = FastAPI(title="Semantic Product Search API")

app.include_router(search_router, prefix="/search", tags=["Search"])

@app.get("/")
def read_root():
    """Health check endpoint."""
    return {"message": "Backend running"}
