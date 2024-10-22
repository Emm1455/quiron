// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <NavBar />
        </div>

        <div className="hero-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/tutorial"
              element={
                <div className="container has-text-centered">
                  <p className="title">Tutorial</p>
                  <p className="subtitle">page 2</p>
                </div>
              }
            />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
