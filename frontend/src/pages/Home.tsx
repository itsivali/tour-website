import { useTours } from "../api/api";
import TourCard from "../components/TourCard";

const Home = () => {
  const { tours, isLoading } = useTours();

  if (isLoading) return <div className="p-8">Loading tours…</div>;

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.map((tour: { id: string | number; [key: string]: any }) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default Home;
