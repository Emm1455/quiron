import { useState } from 'react';
import { useNavigate } from "react-router-dom";;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password === "password"){
      sessionStorage.setItem("name", "user");
      sessionStorage.setItem("token", "token123");
      navigate("/");
    }
    else{
      alert("Invalid password");
    }
  };

  return (
    <div className="container">
      <div className="column is-half is-offset-one-quarter">
        <form onSubmit={handleSubmit} className="box">
          <h1 className="title is-4">Login</h1>

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
            <label className="label">Password</label>
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
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
