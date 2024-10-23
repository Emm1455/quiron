export const URI = "https://quiron/api/";

export const endpoints = {
  login: "login",
  user: "user",
  userCreate: "user/create"
};

/**
 * Returns the complete URL for a given endpoint.
 * @param {string} endpointKey - The key of the endpoint in the endpoints object.
 * @returns {string} - The complete URL.
 */
export const getURL = (endpointKey) => {
  const endpoint = endpoints[endpointKey];
  if (!endpoint) {
    throw new Error(`Endpoint '${endpointKey}' does not exist.`);
  }
  return `${URI}${endpoint}`;
};