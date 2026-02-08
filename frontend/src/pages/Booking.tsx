import BookingForm from "../components/BookingForm";
import { createBooking, useTours } from "../api/api";
import type { BookingData } from "../api/api";
import toast from "react-hot-toast";

export default function Booking() {
  const { tours, isLoading } = useTours();

  const handleBooking = (data: BookingData) => {
    createBooking(data)
      .then((res) => toast.success(res.message))
      .catch(() => toast.error("Booking failed. Please try again."));
  };

  return (
    <div className="py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Book a Tour</h1>
      {isLoading ? (
        <p className="text-center text-gray-500">Loading tours...</p>
      ) : (
        <BookingForm tours={tours} onSubmit={handleBooking} />
      )}
    </div>
  );
}
