import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { endpoints, getURL } from "../api/connectionData";
import { fetchWrapper } from "../api/fetchWrapper";

function LoginForm() {
  const { logIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetchWrapper(getURL(endpoints.auth), "POST", {
        email: email,
        password: password
      });

      if (response.success){
        // Set browser variables
        logIn(response.data.token);
        navigate("/");
      } else {
        setError(response.message || "Login failed");
      }
    }
    catch (err){
      setError(err.message || "An error ocurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="column is-half is-offset-one-quarter">
        <form onSubmit={handleSubmit} className="box">
          <h1 className="title is-4">Inicia sesión</h1>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Contraseña</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit">
                Login
              </button>
            </div>
          </div>
          {error && <p className="has-text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
