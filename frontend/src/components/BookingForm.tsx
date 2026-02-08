import { useState } from "react";
import type { Tour, BookingData } from "../api/api";

interface BookingFormProps {
  tours: Tour[];
  onSubmit: (data: BookingData) => void;
}

export default function BookingForm({ tours, onSubmit }: BookingFormProps) {
  const [form, setForm] = useState({
    tour_id: "",
    name: "",
    email: "",
    phone: "",
    travelers: "1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      tour_id: Number(form.tour_id),
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      travelers: Number(form.travelers) || 1,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
      <select
        name="tour_id"
        value={form.tour_id}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg text-gray-900"
      >
        <option value="">Select a tour</option>
        {tours.map((t) => (
          <option key={t.id} value={t.id}>{t.name} — ${t.price}</option>
        ))}
      </select>
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
      <input type="tel" name="phone" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded-lg" />
      <input type="number" name="travelers" placeholder="Number of travelers" value={form.travelers} onChange={handleChange} min="1" className="w-full p-2 border rounded-lg" />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
        Book Now
      </button>
    </form>
  );
}
