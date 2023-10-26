import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  if (location.pathname === '/login') {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ width: 1300, marginLeft: 250 }}>
        <div className="container">
          <div className="navbar-header">
            <img src="./img/icono.png" height="45" width="45" alt="Logo" />
            <Link to="/" className="navbar-brand page-scroll">
              POLOSEG
            </Link>
            <button className="button-back">
              <Link to="/">
                <img src="/css/nivo-lightbox/prev.png" height="25" width="20"/>
                Inicio
              </Link>
            </button>
          </div>
        </div>
      </nav>
    );
  }

  if (location.pathname === '/register') {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ width: 500, marginLeft: 250 }}>
        <div className="container">
          <div className="navbar-header">
            <img src="./img/icono.png" height="45" width="45" alt="Logo" />
            <Link to="/" className="navbar-brand page-scroll">
              POLOSEG
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  if (location.pathname === '/') {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <img src="./img/icono.png" height="45" width="45" alt="Logo" />
            <Link to="/" className="navbar-brand page-scroll">
              POLOSEG
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#services" className="page-scroll">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
                  Secciones
                </a>
              </li>
              <li>
                <a href="#cards" className="page-scroll">
                  Información
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contacto
                </a>
              </li>
              <li>
                <button className="button-login">
                  <Link to="/login">Iniciar Sesion</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return null; // Por si la ruta no coincide con ninguna de las anteriores

};

