import "../aside.css"
import {Link, Navigate} from "react-router-dom"
import {useState} from "react"

export const Aside = () => {
  const [logout, setLogout] = useState(false)
  const handleLogout = () => {
    setLogout(true)
    alert("Has cerrado sesión!")
    console.log("Has cerrado sesion")
  };

   if(logout){
    return <Navigate to="/"/>;
   }
    return(
<>
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i className="bx bx-user"></i>
          <div className="logo-name" style={{marginLeft: 30}}>
              Hola usuario!
          </div>
        </div>
        <a href="#"><i className="bx bx-menu" id="btn"></i></a>
        
      </div>
      <nav className="ul-list">
        <ul>

          <li>
            <Link to={"/homepage"}>
                <i className="bx bx-grid-alt"></i>
                <span className="links-name">Panel de Control</span>
            </Link>
          </li>

          <li>
            <Link to={"/register"}>
              <i className="bx bx-user"></i>
              <span className="links-name">Crear Usuarios</span>
            </Link>
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
           <li>
            <a href="#!">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links-name">Confirmar Permiso</span>
            </a>     
          </li>
          <li>
            <Link to={"/form"}>
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links-name">Formularios Prueba</span>
            </Link>     
          </li>

        </ul>
      </nav>
      <div className="profile">
      <img src="./img/icono.png" height="45"  width="45"/> <br />
           <h6>POLOSEG</h6>
        <a className="logout">
          <i className="bx bx-log-out" id="logout">
          <button id="logout" onClick={handleLogout}><strong>Cerrar Sesión</strong></button>
          </i>
        </a>
        
      </div>
    </div>

</>
);
};