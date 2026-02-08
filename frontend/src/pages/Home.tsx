import { useTours } from "../api/api";
import HeroSlider from "../components/HeroSlider";
import TourCard from "../components/TourCard";

export default function Home() {
  const { tours, isLoading } = useTours();

  return (
    <>
      <HeroSlider />

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Popular Tours</h2>

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
      </section>
    </>
  );
}
