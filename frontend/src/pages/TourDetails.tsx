import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTourById } from "../api/api";

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    getTourById(id).then(data => setTour(data));
  }, [id]);

  if (!tour) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{tour.name}</h1>
      <p className="mb-4">{tour.description}</p>
      <p className="font-semibold text-xl">Price: ${tour.price}</p>
    </div>
  );
};

export default TourDetails;
