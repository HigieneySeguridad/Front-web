
export const Contact = () => {
 
  return (
      <div id="contact" data-aos="zoom-in">
        <div className="contact-container">
          <div className="contact-form col-md-6">
              <div className="section-title">
                <h2>Contáctanos</h2>
                <p>
                  Por favor complete el siguiente formulario para enviarnos un correo electrónico y lo responderemos lo antes posible.
                </p>
              </div>
              <form name="sentMessage">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Correo"
                        required
                       
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Completar y Enviar
                </button>
              </form>
          </div>

          <div className="col-md-3 contact-info">
            <div className="contact-item">
              <h3>Información de Contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Dirección
                </span>
                (3600) Formosa, Argentina: Avenida 25 de Mayo 3500
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Teléfono
                </span>{" "}
                Teléfono: +0370 4 15 4464908
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Correo Electronico
                </span>{" "}
                E-mail: seghyg@hotmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};
