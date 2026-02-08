import { useTours } from "../api/api";
import TourCard from "../components/TourCard";

export default function Tours() {
  const { tours, isLoading } = useTours();

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">All Tours</h1>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading tours...</p>
      ) : tours.length === 0 ? (
        <p className="text-center text-gray-500">No tours available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
}
