import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTourById } from "../api/api";
import type { Tour } from "../api/api";
import Button from "../components/ui/Button";

export default function TourDetails() {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<Tour | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    getTourById(id)
      .then((data) => setTour(data))
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-500 text-lg">Tour not found.</p>
        <Link to="/tours" className="text-blue-600 underline mt-4 inline-block">Back to tours</Link>
      </div>
    );
  }

  if (!tour) {
    return <p className="py-16 text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      {tour.image && (
        <div className="h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
          <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{tour.name}</h1>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{tour.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-2xl text-blue-600">${tour.price}</span>
        <Link to="/booking"><Button>Book This Tour</Button></Link>
      </div>
    </div>
  );
}
