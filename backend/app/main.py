from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import tours, bookings, contact

app = FastAPI(
    title="Tour Company API",
    description="Backend API for the Interactive Tour Website",
    version="1.0.0"
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # React will connect here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(tours.router, prefix="/api/tours", tags=["Tours"])
app.include_router(bookings.router, prefix="/api/bookings", tags=["Bookings"])
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Tour Company API"}
