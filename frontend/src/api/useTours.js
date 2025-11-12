import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data);

export function useTours() {
  const { data, error } = useSWR("http://127.0.0.1:8000/tours", fetcher, { revalidateOnFocus: false });
  return { tours: data || [], isLoading: !error && !data, isError: error };
}
