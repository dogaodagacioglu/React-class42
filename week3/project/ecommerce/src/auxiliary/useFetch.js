import { useEffect, useState } from 'react';

export const useFetch = (url, dependency = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
      } catch (e) {
        alert('Error: ' + e.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [dependency]);

  return [isLoading, result];
};