import { useState, useEffect } from "react";

function useCachedData(fetchFunction, storageKey) {
  const [data, setData] = useState(() => {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem(storageKey);
    return cachedData ? JSON.parse(cachedData) : null;
  });

  useEffect(() => {
    if (!data) {
      // Fetch and cache data only if not already cached
      //-- TO-DO: Replace fetchFunction with fetchWrapper
      fetchFunction().then((fetchedData) => {
        setData(fetchedData);
        localStorage.setItem(storageKey, JSON.stringify(fetchedData));
      });
    }
  }, [data, fetchFunction, storageKey]);

  return data;
}


export default useCachedData;