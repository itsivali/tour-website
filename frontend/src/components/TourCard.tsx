import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function TourCard({ tour }) {
  return (
    <Card className="h-full">
      <motion.div layout>
        <div className="h-44 rounded-lg overflow-hidden mb-3">
          <img src={tour.image || "/placeholder.jpg"} alt={tour.name} loading="lazy" className="w-full h-full object-cover"/>
        </div>
        <h3 className="text-lg font-semibold">{tour.name}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{tour.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold">${tour.price}</span>
          <Link to={`/tours/${tour.id}`}><Button>View</Button></Link>
        </div>
      </motion.div>
    </Card>
  );
}
