import { useState, useEffect } from "react";
import { fetchWrapper } from "./fetchWrapper";
import { getURL } from "./connectionData";

function useCachedData(endpoint, storageKey) {
  const [data, setData] = useState(() => {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem(storageKey);
    return cachedData ? JSON.parse(cachedData) : null;
  });

  useEffect(() => {
    const fetchAndCacheData = async () => {
      if (!data) {
        try {
          const fetchedData = await fetchWrapper(getURL(endpoint));
          setData(fetchedData);
          localStorage.setItem(storageKey, JSON.stringify(fetchedData));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchAndCacheData();
  }, [data, endpoint, storageKey]);

  return data;
}

export default useCachedData;
