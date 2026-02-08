import { useState } from "react";
import { submitContact } from "../api/api";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact(form)
      .then((res) => {
        toast.success(res.message);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Submission failed. Please try again."));
  };

  return (
    <div className="py-12 px-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-md">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={5} required className="w-full p-2 border rounded-lg resize-none" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
          Send Message
        </button>
      </form>
    </div>
  );
}
