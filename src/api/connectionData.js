// Development URI
// export const URI = "http://localhost:3000/api/";
// MockedServer URI
export const URI = "https://31a3b859-b120-49d8-9b68-7a6626a030e9.mock.pstmn.io/";

export const endpoints = {
  auth: "auth",
  user: "user",
  userCreate: "user/create",
  questionExample: "question/example"
};

/**
 * Returns the complete URL for a given endpoint.
 * @param {string} endpoint - The endpoint where to send the request
 * @returns {string} - The complete URL.
 */
export const getURL = (endpoint) => {
  return `${URI}${endpoint}`;
};