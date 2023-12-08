import "./aside.css"
import {Link} from "react-router-dom";
import {useState, useContext } from "react";
import { UserContext } from "../../context/userContext";


export const Aside = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { state } = useContext(UserContext);


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
    <img src="./assets/img/icono.png" alt="profileImg" height= "25" width="25" style={{marginRight: '20'}}/>
      POLOSEG
    </div>
    <button onClick={toggleSidebar} style={{border: 'none', background: 'transparent'}}>
        <i className={menuBtnChange()} id="btn"></i>
    </button>
  </div>

  <ul className="nav-list ulAside">

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
      <Link to="/chart">
        <i className="bx bx-bar-chart-alt-2"></i>
        <span className="links_name">Gráficos</span>
      </Link>
      <span className="tooltip">Gráficos</span>
    </li>
  )
}
  {
    state.role === "Admin" &&
    <li>
      <Link to ={"/archivos"}>
        <i className='bx bx-folder'></i>
        <span className="links_name">Archivos</span>
      </Link>
      <span className="tooltip">Archivos</span>
    </li>
  }
    <li>
      <a href={"/dashboard"}>
        <i className='bx bx-bar-chart-alt-2'></i>
        <span className="links_name">Dashboard</span>
      </a>
      <span className="tooltip">Dashboard</span>
    </li>
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
    
  </ul>
  
</div>

  )}
  