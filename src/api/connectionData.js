// Development URI
// export const URI = "http://localhost:3000/api/";
// MockedServer URI
export const URI = "https://31a3b859-b120-49d8-9b68-7a6626a030e9.mock.pstmn.io/";

export const endpoints = {
  auth: "auth",
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