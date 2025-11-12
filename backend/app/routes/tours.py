from fastapi import APIRouter
from app.schemas import Tour

router = APIRouter()

# Sample tours
sample_tours = [
    {"id": 1, "title": "Safari Adventure", "description": "Explore Kenya’s wildlife", "price": 500},
    {"id": 2, "title": "Coastal Escape", "description": "Relax at Diani Beach", "price": 350},
]

@router.get("/", response_model=list[Tour])
async def get_tours():
    return sample_tours

@router.get("/{tour_id}", response_model=Tour)
async def get_tour(tour_id: int):
    for tour in sample_tours:
        if tour["id"] == tour_id:
            return tour
    return {"error": "Tour not found"}
