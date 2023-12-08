import React, { useState, useContext, useEffect} from 'react';
import "./HeaderTool.css";
import { UserContext } from '../../context/userContext';
import { userType } from '../../context/userTypes';
import Swal from 'sweetalert2'
import axios from 'axios';

export const HeaderTool = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { state, stateDispatch } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  const handleDropdownClicked = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubMenuClicked = (menu) => {
    const subMenu = document.getElementById(menu);
    const subMenuList = document.getElementsByClassName("sub-menu");

    for (let s of subMenuList) {
      s.classList.remove("open");
    }

    if (subMenu) {
      subMenu.classList.add("open");
    }

    const mainMenu = document.getElementById("menu-inner");
    mainMenu.classList.toggle("open");
  };

  const handleLogout = () => {
    stateDispatch({
      type: userType.logOut
    })
    Swal.fire({
      icon: 'success',
      title: 'Has cerrado sesion'
    })
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'dni') {
      setDni(value);
    } else if (name === 'telefono') {
      setTelefono(value);
    }
  };
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

const fetchUsuario = async () => {
    try {
      const response = await axios.get('http://localhost:3000/registrar');

      if(response.status === 200){
        setUsuarios(response.data);
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };
  const editUserInfo = async (id) => {

    const editarUsuario = { 
      username, 
      password, 
      dni, 
      telefono 
    };
  
    try {
      await axios.put(`http://localhost:3000/registrar/${id}`, editarUsuario)
      fetchUsuario();
        Swal.fire({
          icon: 'success',
          title: 'Editado correctamente'
        })
        setUsername("")
        setPassword("")
        setTelefono("")
        setDni("")
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'No se pudo editar, error server'
      })
      console.error('Error en la solicitud:', error.message);
    }
  };

  useEffect(()=>{
    fetchUsuario();
  },[]);

  return (
    <nav className='headerTool'>
      <div className={`dropdown ${dropdownOpen ? 'open' : ''}`} id="dropdown">
        <button onClick={handleDropdownClicked}>
          <span className="material-symbols-outlined"> account_circle </span>
          {state.nombre}
          <span className="chevron material-symbols-outlined"> expand_more </span>
        </button>
        <div className="menu">
          <div id="menu-inner" className="menu-inner">
            <div className="main-menu">
              <button onClick={() => handleSubMenuClicked('my-tools')}>
                <span className="material-symbols-outlined"> build </span>
                Herramientas
                <span className="chevron material-symbols-outlined">
                  chevron_right
                </span>
              </button>
              <button onClick={() => handleSubMenuClicked('settings')}>
                <span className="material-symbols-outlined"> settings </span>
                Configuración
                <span className="chevron material-symbols-outlined">
                  chevron_right
                </span>
              </button>
              <button onClick={handleLogout}>
                <span className="material-symbols-outlined"> logout </span>
                Cerrar sesión
              </button>
            </div>
            <div id="my-tools" className="sub-menu">
              <button onClick={() => handleSubMenuClicked()}>
                <span className="material-symbols-outlined"> arrow_back </span>
                Atrás
              </button>
              <button>
                <span className="material-symbols-outlined"> description </span>
                Tareas
              </button>
              <button>
                <span className="material-symbols-outlined"> cloud_upload </span>
                Subir Archivos
              </button>
            </div>
            <div id="settings" className="sub-menu">
              <button onClick={() => handleSubMenuClicked()}>
                <span className="material-symbols-outlined"> arrow_back </span>
                Atrás
              </button>
              <button >
                <span className="material-symbols-outlined">
                  settings_night_sight
                </span>
                Modo oscuro
              </button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className="material-symbols-outlined"> account_circle </span>
                 Mi Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
      {usuarios.map((usuario) => (
      <div key={usuario._id} className="modal fade" id="exampleModal" tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
    <div className="modal-content">
        <div className='modal-header'>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    
    <div className="modal-body">
    <form id="editarUsuarioForm">
     <div className='mb_3'>
        <label htmlFor="usuario" className="form-label">Nombre de Usuario</label>
        <input type="text" name='username' className='form-control' id='username' value={username} onChange={handleInputChange} required/>
     </div>
        <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input type={showPassword ? 'text' : 'password'} name='password' className="form-control" id="password" value={password} onChange={handleInputChange} autoComplete="off" required/>
        <button type="button" className="editarUserButon" onClick={handleTogglePassword} aria-pressed={showPassword}>
            <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
        </button>
        </div>
        <div className="mb-3">
        <label htmlFor="dni" className="form-label">DNI</label>
        <input type="text" className="form-control" id="dni" name='dni' value={dni} onChange={handleInputChange} required/>
        </div>
        <div className="mb-3">
        <label htmlFor="telefono" className="form-label">Teléfono</label>
        <input type="text" className="form-control" id="telefono" name='telefono' value={telefono} onChange={handleInputChange} required/>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => editUserInfo(usuario._id)}>Guardar Cambios</button>
    </form>
        </div>
    </div>
    </div>
    </div>
      ))}

    </nav>
  );
};

