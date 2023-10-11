import "../aside.css"
import {Link, Navigate} from "react-router-dom"
import {useState} from "react"

export const Aside = () => {
  const [logout, setLogout] = useState(false)
  const [asideVisible, setAsideVisible] = useState(true);
  const handleLogout = () => {
    setLogout(true)
    alert("Has cerrado sesión!")
    console.log("Has cerrado sesion")
  };
  const toggleAside = () => {
    setAsideVisible(!asideVisible);
  };

   if(logout){
    return <Navigate to="/"/>;
   }
    return(
<>   
    <button style={{color: 'black'}} onClick={toggleAside} className="button-login">Mostrar Aside</button>
    <aside style={{ display: asideVisible ? 'block' : 'none' }}>
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i className="bx bx-user"></i>
          <div className="logo-name" style={{marginLeft: 30}}>
              Hola usuario!
          </div>
        </div>
          <button onClick={toggleAside} className="bx bx-menu" id="btn" style={{background: 'transparent', border: 'none'}}>
          </button>
       
       
        
      </div>
      <nav className="ul-list main-menu">
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
          <li>
            <Link to={"/chart"}>
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links-name">Gráficos</span>
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
    </aside>
</>
);
};