from fastapi import APIRouter, BackgroundTasks
from app.schemas import ContactMessage
from app.utils.email import send_email

router = APIRouter()

@router.post("/")
async def contact_us(message: ContactMessage, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email, message)
    return {"message": "Your inquiry has been received. We’ll get back to you soon!"}
