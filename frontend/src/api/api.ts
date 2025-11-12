// api.ts
import { useState, useEffect } from 'react';

export const useTours = () => {
  const [tours, setTours] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tours')
      .then(res => res.json())
      .then(data => {
        setTours(data);
        setIsLoading(false);
      });
  }, []);

  return { tours, isLoading };
};
