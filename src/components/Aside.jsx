import "../aside.css"
import {Link} from "react-router-dom"
export const Aside = () => {
    return(
<>
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i className="bx bx-user"></i>
          <div className="logo-name" style={{marginLeft: 30}}>Usuario</div>
        </div>
        <a href="#"><i className="bx bx-menu" id="btn"></i></a>
        
      </div>
      <nav className="ul-list">
        <ul>

          <li>
            <a href="#!">
                <i className="bx bx-grid-alt"></i>
                <span className="links-name">Panel de Control</span>
            </a>
          </li>

          <li>
            <a href="#!">
              <i className="bx bx-user"></i>
              <span className="links-name"><Link to="/register">Crear Usuarios</Link></span>
            </a>
          </li>

          <li>
            <a href="#!">
              <i className="bx bx-chat"></i>
              <span className="links-name">Notificaciones</span>
            </a>
          </li>

          <li>
            <a href="#!">
              <i className="bx bx-cog"></i>
              <span className="links-name">Configuración</span>
            </a>
          </li>
         {/*  <li>
            <a href="#!">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links-name">Analytics</span>
            </a>
           
          </li>
          <li>
            <a href="#!">
              <i className="bx bx-folder"></i>
              <span className="links--name">File Manager</span>
            </a>
            
          </li>
          <li>
            <a href="#!">
              <i className="bx bx-cart-alt"></i>
              <span className="links-name">Order</span>
            </a>
          
          </li>
          <li>
            <a href="#!">
              <i className="bx bx-heart"></i>
              <span className="links-name">Saved</span>
            </a>
           
          </li> */}
         
        </ul>
      </nav>
      <div className="profile">
        <a href="#!" className="logout">
          <i className="bx bx-log-out" id="logout"><strong>Cerrar Sesión</strong> </i>
        </a>
      </div>
    </div>

</>
);
};