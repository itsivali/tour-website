from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Tour
from app.schemas import TourOut

router = APIRouter()


@router.get("/", response_model=list[TourOut])
async def get_tours(db: Session = Depends(get_db)):
    return db.query(Tour).all()


@router.get("/{tour_id}", response_model=TourOut)
async def get_tour(tour_id: int, db: Session = Depends(get_db)):
    tour = db.query(Tour).filter(Tour.id == tour_id).first()
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    return tour
