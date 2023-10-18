import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <footer>
         <div className="color-footer">
          <div className=" padding-footer">
              <h4 className="text-responsive-footer">© Copyright POLOSEG All Rights Reserved.</h4>
              <ul className="links-footer">
                <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/facebook-icon-sa-footer.webp"/></a></li>
                <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/instagram-icon-sa-footer.webp" /></a></li>
                <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/social-wsp.webp" /></a></li>
                <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/email-icon-sa-footer.webp"/></a></li>
              </ul>
              <h6 className="text-responsive-footer" style={{textAlign: "center"}}>Agencia Seguridad e Higiene <strong><a className="color-link-footer">POLOSEG</a></strong> · Todos los derechos reservados.</h6>
            </div>
        </div>
        </footer>
     )}
   if(location.pathname === '/homepage'){
      return (
        <footer style={{position: 'absolute', bottom: 0}}>
           <div className="color-footer">
            <div className=" padding-footer">
                <h4 className="text-responsive-footer">© Copyright POLOSEG All Rights Reserved.</h4>
                <ul className="links-footer">
                  <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/facebook-icon-sa-footer.webp"/></a></li>
                  <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/instagram-icon-sa-footer.webp" /></a></li>
                  <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/social-wsp.webp" /></a></li>
                  <li><a href="#"><img className="icons-footer2 icons-responsive" src="img/redes/email-icon-sa-footer.webp"/></a></li>
                </ul>
                <h6 className="text-responsive-footer" style={{textAlign: "center"}}>Agencia Seguridad e Higiene <strong><a className="color-link-footer">POLOSEG</a></strong> · Todos los derechos reservados.</h6>
              </div>
          </div>
          </footer>
       )
     }
}

