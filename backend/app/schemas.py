from pydantic import BaseModel, EmailStr

class Tour(BaseModel):
    id: int
    title: str
    description: str
    price: float

class Booking(BaseModel):
    name: str
    email: EmailStr
    tour_id: int
    travelers: int

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str
