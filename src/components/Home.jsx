import { Link } from "react-router-dom";

function Home() {
  const userToken = sessionStorage.getItem("token");
  const userName = sessionStorage.getItem("name");
  // const navigate = useNavigate();
  return (
    <>
      {userToken ? (
        <div className="container has-text-centered">
          <p className="title is-italic is-4">
            Bienvenido de nuevo {userName}
          </p>
        </div>
      ) : (
        <>
          <div className="container has-text-centered">
          <p className="title is-italic is-4">
            Bienvenido, crea tu cuenta o mira el tutorial de la app
            <Link className="has-text-primary" to="/tutorial"> aquí</Link>
            {/* <a href={() => navigate("/tutorial")}> aquí</a> */}
          </p>
        </div>
        </>
      )}
    </>
  );
}

export default Home;
