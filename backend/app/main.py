from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routes import tours, bookings, contact
import app.models  # ensure models are registered before create_all


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    _seed_sample_tours()
    yield


def _seed_sample_tours():
    from app.database import SessionLocal
    from app.models import Tour

    db = SessionLocal()
    try:
        if db.query(Tour).count() == 0:
            db.add_all([
                Tour(name="Safari Adventure", description="Explore Kenya's wildlife on a guided safari through Maasai Mara and Amboseli National Park. Spot the Big Five and enjoy bush dinners under the stars.", price=500, image="/hero-1.jpg"),
                Tour(name="Coastal Escape", description="Relax at Diani Beach with pristine white sands, turquoise waters, and vibrant coral reefs. Includes snorkeling, boat rides, and beachfront dining.", price=350, image="/hero-2.jpg"),
                Tour(name="Mountain Trek", description="Conquer the peaks of Mount Kenya with expert guides. Experience breathtaking alpine scenery, moorlands, and glacier views on this multi-day trek.", price=450, image="/hero-3.jpg"),
            ])
            db.commit()
    finally:
        db.close()


app = FastAPI(
    title="Tour Company API",
    description="Backend API for the Interactive Tour Website",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tours.router, prefix="/api/tours", tags=["Tours"])
app.include_router(bookings.router, prefix="/api/bookings", tags=["Bookings"])
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])


@app.get("/")
async def root():
    return {"message": "Welcome to the Tour Company API"}
