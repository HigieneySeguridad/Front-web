import "./aside.css"
import {Link} from "react-router-dom";
import {useState, useContext } from "react";
import Swal from 'sweetalert2'
import { UserContext } from "../../context/userContext";
import { userType } from '../../context/userTypes'

export const Aside = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { state, stateDispatch } = useContext(UserContext);

  const handleLogout = () => {
    stateDispatch({
      type: userType.logOut
    })
    Swal.fire({
      icon: 'warning',
      title: 'Has cerrado sesion'
    })
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuBtnChange = () => {
    if (isSidebarOpen) {
      
      return "bx bx-menu";
    } else {
      
      return "bx bx-menu";
    }
  };

return(
  <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

  <div className="logo-details">
    <div className="logo_name">
    <img src="./img/icono.png" alt="profileImg" height= "25" width="25"/>
      POLOSEG
      </div>
    <button onClick={toggleSidebar} style={{border: 'none', background: 'transparent'}}>
        <i className={menuBtnChange()} id="btn"></i>
    </button>
  </div>

  <ul className="nav-list">

    {
      state.role === "Admin"  &&
      <li>
      <Link to={"/panel"}>
        <i className='bx bx-grid-alt'></i>
        <span className="links_name">Administrar</span>
      </Link>
      <span className="tooltip">Administrar</span>
    </li>

    }
    {
      state.role === "Admin" &&
    <li>
      <Link to={"/register"}>
        <i className='bx bx-user'></i>
        <span className="links_name">Crear Usuarios</span>
      </Link>
      <span className="tooltip">Crear Usuarios</span>
    </li>
    }
    
{
  state.role === "Operario" && (
    <li>
      <Link to="/permisos">
        <i className="bx bx-check"></i>
        <span className="links_name">Permisos</span>
      </Link>
      <span className="tooltip">Permisos</span>
    </li>
  )
}

{
  state.role === "Inspector" && (
    <li>
      <Link to="/dashboard">
        <i className="bx bx-bar-chart-alt-2"></i>
        <span className="links_name">Gráficos</span>
      </Link>
      <span className="tooltip">Gráficos</span>
    </li>
  )
}

    <li>
      <a href="#">
        <i className='bx bx-notification'></i>
        <span className="links_name">Notificaciones</span>
      </a>
      <span className="tooltip">Notificaciones</span>
    </li>
  {
    state.role === "Admin" &&
    <li>
      <Link to ={"/historial"}>
        <i className='bx bx-folder'></i>
        <span className="links_name">Archivos</span>
      </Link>
      <span className="tooltip">Archivos</span>
    </li>
  }
  { state.role === "Admin" &&
    <li>
      <Link to={"/dashboard"}>
        <i className='bx bx-bar-chart-alt-2'></i>
        <span className="links_name">Dashboard</span>
      </Link>
      <span className="tooltip">Dashboard</span>
    </li>
  }
    
    {
      state.role === "Admin" &&
      <li>
      <Link to={"/permisos"}>
        <i className='bx bx-receipt'></i>
        <span className="links_name">Formularios</span>
      </Link>
      <span className="tooltip">Formularios</span>
    </li>
    }
    
    <li className="profile">
      <div className="profile-details">
        <img src="./img/icono.png" alt="profileImg" height= "45" width="45"/>
        <div className="name_job">
          <div className="job"><strong>{state.nombre}</strong>
          </div>
        </div>
      </div>

    <button onClick={handleLogout} style={{border: 'none', background: 'transparent'}}>
      <i className='bx bx-log-out' id="log_out"></i>
    </button>
    </li>
  </ul>
  
</div>

  )}
  