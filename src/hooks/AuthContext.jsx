import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap your app and provide the token state
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(sessionStorage.getItem("token"));

  const logIn = (token) => {
    sessionStorage.setItem("token", token);
    setUserToken(token);
  };

  const logOut = () => {
    sessionStorage.clear();
    setUserToken(null);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setUserToken(token); // Update token when the app loads
  }, []);

  return (
    <AuthContext.Provider value={{ userToken, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
