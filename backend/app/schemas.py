from typing import Optional
from pydantic import BaseModel, EmailStr


class TourOut(BaseModel):
    id: int
    name: str
    description: str
    price: float
    image: str = ""

    model_config = {"from_attributes": True}


class BookingCreate(BaseModel):
    name: str
    email: EmailStr
    tour_id: int
    phone: Optional[str] = None
    travelers: Optional[int] = 1
    travel_date: Optional[str] = None


class BookingOut(BaseModel):
    id: int
    name: str
    email: str
    tour_id: int
    phone: Optional[str] = None
    travelers: Optional[int] = 1
    travel_date: Optional[str] = None

    model_config = {"from_attributes": True}


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


class MessageResponse(BaseModel):
    message: str
