import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Tutorial from "./components/Tutorial";

function App() {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <NavBar />
        </div>
        <div className="hero-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
