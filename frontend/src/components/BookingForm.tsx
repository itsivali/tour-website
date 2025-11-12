import { useState } from "react";

const BookingForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    tour_id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4 bg-white rounded shadow">
      <input type="text" name="tour_id" placeholder="Tour ID" value={form.tour_id} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Book Now</button>
    </form>
  );
};

export default BookingForm;
  