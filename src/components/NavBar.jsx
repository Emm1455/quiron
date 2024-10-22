import { Link } from "react-router-dom";
import fullLogo from "../assets/logo_cutted.png";

function NavBar() {
  const userToken = sessionStorage.getItem("token");
  const logOut = () => {
    sessionStorage.clear();
  };
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={fullLogo} alt="Logo" />
          </a>
          <span className="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item is-active" to="/">
              Inicio
            </Link>
            <Link className="navbar-item" to="/tutorial">
              Instrucciones
            </Link>
            <span className="navbar-item">
              {userToken ? (
                <Link className="button is-danger is-inverted" onClick={() => logOut()} to="/">
                  <span>Cerrar sesión</span>
                </Link>
              ) : (
                <Link className="button is-success is-inverted" to="/login">
                  <span>Iniciar sesión</span>
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
