import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE = "http://127.0.0.1:8000/api";

export interface Tour {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface BookingData {
  tour_id: number;
  name: string;
  email: string;
  phone?: string;
  travelers?: number;
  travel_date?: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface ApiMessage {
  message: string;
}

export async function getTours(): Promise<Tour[]> {
  const res = await axios.get<Tour[]>(`${API_BASE}/tours/`);
  return res.data;
}

export async function getTourById(id: string | number): Promise<Tour | null> {
  if (!id) return null;
  const res = await axios.get<Tour>(`${API_BASE}/tours/${id}`);
  return res.data;
}

export async function createBooking(data: BookingData): Promise<ApiMessage> {
  const res = await axios.post<ApiMessage>(`${API_BASE}/bookings/`, data);
  return res.data;
}

export async function submitContact(data: ContactData): Promise<ApiMessage> {
  const res = await axios.post<ApiMessage>(`${API_BASE}/contact/`, data);
  return res.data;
}

export function useTours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTours()
      .then((data) => setTours(data || []))
      .catch(() => setTours([]))
      .finally(() => setIsLoading(false));
  }, []);

  return { tours, isLoading };
}
