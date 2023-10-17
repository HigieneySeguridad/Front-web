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

  <div className="logo-details">
    <i className='bx bxl-c-plus-plus icon'></i>
    <div className="logo_name">CodingStella</div>
    <i className='bx bx-menu' id="btn"></i>
  </div>

  <ul className="nav-list">

    <li>
      <i className='bx bx-search'></i>
      <input type="text" placeholder="Buscando..."/>
      <span className="tooltip">Buscar</span>
    </li>

    <li>
      <Link to={"/homepage"}>
        <i className='bx bx-grid-alt'></i>
        <span className="links_name">Administración</span>
      </Link>
      <span className="tooltip">Administración</span>
    </li>

    <li>
      <Link to={"/register"}>
        <i className='bx bx-user'></i>
        <span className="links_name">Usuarios</span>
      </Link>
      <span className="tooltip">Usuarios</span>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-chat'></i>
        <span className="links_name">Notificaciones</span>
      </a>
      <span className="tooltip">Notificaciones</span>
    </li>
    <li>
      <Link to={"/chart"}>
        <i className='bx bx-pie-chart-alt-2'></i>
        <select className="links_name">
          <option value="Mensual">Mensual</option>
          <option value="Anual">Anual</option>
        </select>
      </Link>
      <select className="tooltip">
          <option value="Mensual">Mensual</option>
          <option value="Anual">Anual</option>
      </select>
    </li>
    <li>
      <a href="#">
        <i className='bx bx-folder'></i>
        <span className="links_name">Archivos</span>
      </a>
      <span className="tooltip">Archivos</span>
    </li>

    <li>
      <a href="#">
        <i className='bx bx-cog'></i>
        <span className="links_name">Configuración</span>
      </a>
      <span className="tooltip">Configuración</span>
    </li>
    <li className="profile">
      <div className="profile-details">
        <img src="./img/icono.png" alt="profileImg" height= "45" width="45"/>
        <h6>POLOSEG</h6>
        <div className="name_job">
          <div className="name">Usuario</div>
          <div className="job">Nose</div>
        </div>
      </div>
      <a>
      <i className='bx bx-log-out' id="log_out">
      <button onClick={handleLogout}><strong>Cerrar Sesión</strong></button>
      </i>
      </a>
    </li>
  </ul>
</div>
</>
);
};
