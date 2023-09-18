import {Link} from "react-router-dom"

export const Header = () => {

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
        <img src="./img/icono.png" height="45" viewBox="0 0 32 32" width="45"/>
          <a className="navbar-brand page-scroll">
            <Link to = "/">POLOSEG</Link>
          </a>{" "}
          
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
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
                Info
            </a>
            </li>
           
            <li>
            <a href="#team" className="page-scroll">
                Equipo
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
            <li>
              <button className="button-login">
                <Link to = "/login"><span>Iniciar Sesion</span></Link>
              </button>
       
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
