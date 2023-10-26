import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom";
import "../aside.css"
import Swal from 'sweetalert2'
import { PanelControl } from '../../components/PanelControl'
import { UserContext } from '../../context/userContext'
import { userType } from '../../context/userTypes'




export const ViewAdmin = () => {
    const { state, stateDispatch } = useContext(UserContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = ()=>{
        stateDispatch({
          type: userType.logOut
        })
        Swal.fire({
            icon: 'warning',
            title: 'Has cerrado sesion'
          })
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
      const menuBtnChange = () => {
        if (isSidebarOpen) {
          
          return "bx bx-menu";
        } else {
          
          return "bx bx-menu";
            
    }}
  return (
    <>
    <PanelControl/>
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
    
    <li>
      <Link to={"/panel"}>
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
        <i className='bx bx-notification'></i>
        <span className="links_name">Notificaciones</span>
      </a>
      <span className="tooltip">Notificaciones</span>
    </li>
    <li>
      <Link to={"/chart"}>
        <i className='bx bx-bar-chart-alt-2'></i>
        <span className="links_name">Gráficos</span>
      </Link>
      <span className="tooltip">Gráficos</span>
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
    
    <li>
      <Link to={"/form"}>
        <i className='bx bx-receipt'></i>
        <span className="links_name">Formularios</span>
      </Link>
      <span className="tooltip">Formularios</span>
    </li>

    <li className="profile">
      <div className="profile-details">
        <img src="./img/icono.png" alt="profileImg" height= "45" width="45"/>
        <div className="name_job">
          <div className="name">Bienvenido:</div>
          <div className="job">{state.nombre}</div>
        </div>
      </div>

     
    <button onClick={handleLogout} style={{border: 'none', background: 'transparent'}}>
      <i className='bx bx-log-out' id="log_out"></i>
    </button>
    </li>
  </ul>
</div>
    </>
  )
}
