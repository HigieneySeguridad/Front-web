import React from "react";
import {Link} from "react-router-dom"

export const Navigation = () => {

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
        <img src="./img/icono.png" height="45" viewBox="0 0 32 32" width="45"/>
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
            <a href="#about" className="page-scroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
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
                <Link to = "/login"><span style={{color: "black"}}>Iniciar Sesion</span></Link>
              </button>
       
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
