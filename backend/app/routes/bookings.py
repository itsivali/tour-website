from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Booking, Tour
from app.schemas import BookingCreate, BookingOut, MessageResponse

router = APIRouter()


@router.post("/", response_model=MessageResponse)
async def create_booking(booking: BookingCreate, db: Session = Depends(get_db)):
    tour = db.query(Tour).filter(Tour.id == booking.tour_id).first()
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")

    db_booking = Booking(
        tour_id=booking.tour_id,
        name=booking.name,
        email=booking.email,
        phone=booking.phone or "",
        travelers=booking.travelers or 1,
        travel_date=booking.travel_date or "",
    )
    db.add(db_booking)
    db.commit()
    return {"message": f"Booking confirmed for {tour.name}!"}


@router.get("/", response_model=list[BookingOut])
async def get_bookings(db: Session = Depends(get_db)):
    return db.query(Booking).all()
