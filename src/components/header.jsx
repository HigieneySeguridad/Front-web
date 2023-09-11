import React from "react";
import { Navigation } from "./Navigation"

export const Header = () => {
  return (
    <>
    <Navigation/>
     <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Seguridad e Higiene Industrial
                  <span></span>
                </h1>
                <p>En nuestro sitio web encontrarás toda la información que necesitas para cumplir con los requisitos de seguridad e higiene industrial.</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Leer Más
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
   
  );
};
