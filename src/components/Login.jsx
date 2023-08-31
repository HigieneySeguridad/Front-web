import React, {useState} from 'react'

export const Login = () => {

    return (
      <div className="fondoimagen">
          <div className="contenedor-limite padding-divs">
              <div className="flex-contacto">
                <div className="div-form">
                  <h3>Iniciar Sesion</h3>
                    <form className="font-form"
                        method="POST">
                              <div className="form-floating mb-3">
                                <input name="usuario" type="text" className="form-control input-form" id="nombre" placeholder="Usuario"/>
                                <br />
                              </div>
                        
                              <div className="form-floating mb-3">
                                <input name="password" type="email" className="form-control input-form" id="mail" placeholder="Contraseña"/>
                                <br />
                              </div>
                              <div className="div-button">
                                <button type="submit" className="button-enviar">Enviar</button>
                              </div>
                            </form>  
                  </div>
            
                </div>
       
          </div>
      </div>

    

);  
}
