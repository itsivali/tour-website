from fastapi import APIRouter
from app.schemas import Booking

router = APIRouter()

bookings = []

@router.post("/", response_model=Booking)
async def create_booking(booking: Booking):
    bookings.append(booking)
    return booking

@router.get("/", response_model=list[Booking])
async def get_bookings():
    return bookings
