import BookingForm from "../components/BookingForm";
import { createBooking } from "../api/api";
import { toast } from "react-hot-toast";

const Booking = () => {
  const handleBooking = (data) => {
    createBooking(data)
      .then(res => alert(res.message))
      .catch(err => alert("Booking failed"));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Tour</h1>
      <BookingForm onSubmit={handleBooking} />
    </div>
  );
};

export default Booking;
