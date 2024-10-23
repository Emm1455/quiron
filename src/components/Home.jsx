import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

function Home() {
  const { userToken } = useAuth();
  const userName = sessionStorage.getItem("name");
  // const navigate = useNavigate();
  return (
    <>
      {userToken ? (
        <div className="container has-text-centered">
          <p className="title is-italic is-4">Bienvenido de nuevo {userName}</p>
        </div>
      ) : (
        <>
          <div className="container has-text-centered">
            <p className="title has-text-text is-italic is-4">
              Bienvenido,{" "}
              <Link className="has-text-link" to="/register">
                crea tu cuenta
              </Link>{" "}
              o mira el{" "}
              <Link className="has-text-link" to="/tutorial">
                tutorial de la app
              </Link>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
