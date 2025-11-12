import { useEffect, useState } from "react";
import { getTours } from "../api/api";
import TourCard from "../components/TourCard";

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getTours().then(data => setTours(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">All Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map(tour => <TourCard key={tour.id} tour={tour} />)}
      </div>
    </div>
  );
};

export default Tours;
