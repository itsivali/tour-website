import { useState } from "react";
import type { Tour, BookingData } from "../api/api";

interface BookingFormProps {
  tours: Tour[];
  onSubmit: (data: BookingData) => void;
}

const inputClass =
  "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition";

const labelClass = "text-sm font-medium text-gray-700 leading-none";

export default function BookingForm({ tours, onSubmit }: BookingFormProps) {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    tour_id: "",
    name: "",
    email: "",
    phone: "",
    travelers: "1",
    travel_date: "",
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
      travel_date: form.travel_date || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
      <div className="space-y-1.5">
        <h2 className="text-xl font-semibold text-gray-900">Book Your Adventure</h2>
        <p className="text-sm text-gray-500">Fill in the details below to reserve your spot.</p>
      </div>

      <hr className="border-gray-100" />

      {/* Tour selection */}
      <div className="space-y-2">
        <label htmlFor="tour_id" className={labelClass}>Tour *</label>
        <select
          id="tour_id"
          name="tour_id"
          value={form.tour_id}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">Choose a tour...</option>
          {tours.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} — ${t.price}
            </option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className={labelClass}>Full Name *</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="e.g. Jane Doe"
          value={form.name}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label htmlFor="phone" className={labelClass}>Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="+254 700 000 000"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Date + Travelers side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="travel_date" className={labelClass}>Travel Date *</label>
          <input
            id="travel_date"
            type="date"
            name="travel_date"
            value={form.travel_date}
            onChange={handleChange}
            min={today}
            required
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="travelers" className={labelClass}>Travelers</label>
          <input
            id="travelers"
            type="number"
            name="travelers"
            placeholder="1"
            value={form.travelers}
            onChange={handleChange}
            min="1"
            max="20"
            className={inputClass}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      >
        Confirm Booking
      </button>
    </form>
  );
}
