import React, { useContext, useState } from 'react'
import "../aside.css"
import Swal from 'sweetalert2'
import { Chart } from '../../components/Chart'
import { UserContext } from '../../context/userContext'
import { userType } from '../../context/userTypes'
import "../aside.css"


export const ViewInspectorExt = () => {
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
   <Chart/>
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
    <a href="#">
      <i className='bx bx-notification'></i>
      <span className="links_name">Notificaciones</span>
    </a>
    <span className="tooltip">Notificaciones</span>
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
      <div className="name_job">
      <div className="name">Bienvenido:</div>
    <div className="job">{state.username}</div>
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

