// src/components/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getURL } from "../api/connectionData";
import { fetchWrapper } from "../api/fetchWrapper";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetchWrapper(getURL("user"), "POST", {
        email: formData.email,
        password: formData.password,
      });

      if (response.success) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        setError(response.message || "Registration failed.");
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="column is-half is-offset-one-quarter">
        <form onSubmit={handleSubmit} className="box">
          <h1 className="title">Registrate</h1>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Repite la contraseña</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-primary is-fullwidth" type="submit">
                Register
              </button>
            </div>
          </div>
          {error && <p className="has-text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Register;
