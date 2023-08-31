import React from "react";

export const Contact = () => {
 
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
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
                        placeholder="Name"
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
                        placeholder="Email"
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
                    placeholder="Message"
                    required
                    
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                address: 4321 California St, San Francisco, CA 12345
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                phone: +123 22134521 213
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                email: ejemplocorreo@hotmail.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                
              </div>
            </div>
          </div>
        </div>
      </div>
     
     <footer>
     <div className="color-footer">
      <div className="contenedor-limite padding-footer">
          <h4 className="h4-footer text-responsive-footer">© Copyright All Rights Reserved.</h4>
          <ul className="links-footer">
            <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/facebook-icon-sa-footer.webp"/></a></li>
            <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/instagram-icon-sa-footer.webp" /></a></li>
            <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/social-wsp.webp" /></a></li>
            <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/email-icon-sa-footer.webp"/></a></li>
          </ul>
          <h6 className="text-responsive-footer" style={{textAlign: "center"}}><strong>Agencia Seguridad e Higiene</strong> <a className="color-link-footer" >POLOSEG</a> · Todos los derechos reservados.</h6>
        </div>
    </div>
     </footer>


    </div>
  );
};
