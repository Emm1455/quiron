import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import QuestionCard from "./components/Questions/QuestionCard";

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
            <Route path="/tutorial" element={<QuestionCard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
