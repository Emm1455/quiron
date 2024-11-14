/**
 * Wrapper function for making HTTP requests with fetch.
 * @param {string} URL - The complete API URL.
 * @param {string} method - HTTP method (GET, POST, etc.).
 * @param {object} [body] - Request body for POST/PUT requests.
 * @param {object} [headers] - Custom headers (optional).
 * @returns {Promise<object>} - Parsed JSON response.
 */
export const fetchWrapper = async (URL, method = "GET", body = null, headers = {}) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) config.body = JSON.stringify(body);

  try {
    const response = await fetch(URL, config);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Request failed.");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
    throw error;
  }
};
