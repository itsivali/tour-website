from app.schemas import ContactMessage

def send_email(message: ContactMessage):
    # Placeholder: integrate SendGrid, Gmail API, etc.
    print(f"Email sent to admin: {message.name} - {message.email} - {message.message}")
