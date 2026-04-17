import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), "../../data/products.json")

def load_products():
    """Load products from JSON file."""
    if not os.path.exists(DATA_PATH):
        return []
    with open(DATA_PATH, "r") as f:
        return json.load(f)
