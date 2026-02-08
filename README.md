# TourSphere

A full-stack tour booking website built with React and FastAPI. Browse safari, coastal, and mountain tours across East Africa, book trips, and get in touch.

## Tech Stack

| Frontend | Backend |
|----------|---------|
| React 19 + TypeScript | Python FastAPI |
| Vite 7 | SQLAlchemy + SQLite |
| Tailwind CSS v4 | Pydantic v2 |
| Framer Motion | Uvicorn |
| React Router 7 | |

## Prerequisites

- **Node.js** >= 18
- **Python** >= 3.10
- **npm** (comes with Node.js)
- **pip** (comes with Python)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/thigaruth/tour-website.git
cd tour-website
```

### 2. Start the backend

```bash
cd backend

# Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate        # Linux / macOS
# venv\Scripts\activate          # Windows

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn app.main:app --reload
```

The API runs at **http://127.0.0.1:8000**. On first startup the database is created automatically and seeded with sample tours.

Interactive API docs are available at **http://127.0.0.1:8000/docs**.

### 3. Start the frontend

Open a **second terminal**:

```bash
cd frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at **http://localhost:5173**.

> Both the backend and frontend must be running at the same time for the app to work.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tours/` | List all tours |
| GET | `/api/tours/{id}` | Get a single tour |
| POST | `/api/bookings/` | Create a booking |
| GET | `/api/bookings/` | List all bookings |
| POST | `/api/contact/` | Submit a contact message |

## Project Structure

```
tour-website/
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI app, lifespan, CORS
│   │   ├── database.py      # Engine, session, Base
│   │   ├── models.py        # SQLAlchemy models
│   │   ├── schemas.py       # Pydantic schemas
│   │   ├── routes/
│   │   │   ├── tours.py     # Tour endpoints
│   │   │   ├── bookings.py  # Booking endpoints
│   │   │   └── contact.py   # Contact endpoint
│   │   └── utils/
│   │       └── email.py     # Email helper
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── api/api.ts       # Axios client, types, hooks
│   │   ├── components/      # Navbar, HeroSlider, TourCard, BookingForm, Footer
│   │   ├── pages/           # Home, Tours, TourDetails, Booking, Contact, About
│   │   ├── App.tsx          # Router + Toaster
│   │   └── main.tsx         # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Build for Production

```bash
cd frontend
npm run build
```

Output is written to `frontend/dist/`.
