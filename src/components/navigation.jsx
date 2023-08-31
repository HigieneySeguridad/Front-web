import React from "react";
import {Link} from "react-router-dom"

export const Navigation = () => {

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll">
            <Link to = "/">Seguridad e Higiene</Link>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#team" className="page-scroll">
                Equipo
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Extras
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
            <li>
            <Link to = "/login">Iniciar Sesion</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
