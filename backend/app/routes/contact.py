from fastapi import APIRouter, BackgroundTasks, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Contact
from app.schemas import ContactMessage, MessageResponse
from app.utils.email import send_email

router = APIRouter()


@router.post("/", response_model=MessageResponse)
async def contact_us(
    message: ContactMessage,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
):
    db_contact = Contact(
        name=message.name,
        email=message.email,
        message=message.message,
    )
    db.add(db_contact)
    db.commit()

    background_tasks.add_task(send_email, message)
    return {"message": "Your inquiry has been received. We'll get back to you soon!"}
