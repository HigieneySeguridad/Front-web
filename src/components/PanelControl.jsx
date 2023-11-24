import {useState, useEffect } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import { Header } from './header';

export const PanelControl = () => {
const [usuarios, setUsuarios] = useState([]);
const [selectedUserIndex, setSelectedUserIndex] = useState(null);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [role, setRole] = useState('Operario');
const [active, setActive] = useState();
const [dni, setDni] = useState('');
const [telefono, setTelefono] = useState('');
const [showPassword, setShowPassword] = useState(false);


const baseUrl = "http://localhost:3000/registrar";

const fetchUsuario = async () => {
    try {
      const response = await axios.get(baseUrl);

      if(response.status === 200){
        setUsuarios(response.data);
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      fetchUsuario();
      console.log('Usuario eliminado correctamente');
      Swal.fire({
        icon: 'success',
        title: 'Usuario eliminado correctamente'
      })
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'role') {
      setRole(value);
    } else if (name === 'activo') {
      setActive(value === 'true' ? true : false);
    } else if (name === 'dni') {
      setDni(value);
    } else if (name === 'telefono') {
      setTelefono(value);
    }
  };
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const editUserInfo = async (id) => {

    const editarUsuario = { 
      username, 
      password, 
      role, 
      active, 
      dni, 
      telefono 
    };
  
    try {
      await axios.put(`${baseUrl}/${id}`, editarUsuario)
      fetchUsuario();
        Swal.fire({
          icon: 'success',
          title: 'Editado correctamente'
        })
        setActive("")
        setPassword("")
        setRole("")
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
    <>
    <Header/>
    <div className='container' id='content-area'>
        <div className='section-title'>
        <h2>Usuarios del Sistema</h2>
        </div>
        <div className='table-responsive'>
            <table>
                <thead>
                    <tr>
                        <th className='users'>Usuarios</th>
                        <th className='users'>Tipo de Usuario</th>
                        <th className='users'>Estado</th>
                        <th className='users'>Fecha de Alta</th>
                        <th className='users'>Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i)=>(
                <tr key={i} onClick={() => setSelectedUserIndex(i)}>
                     <td className='panel'>{usuario.username}</td>
                     <td className='panel'>{usuario.role}</td>
                     <td className='panel'>
                          <span className={`badge ${usuario.active ? 'text-bg-success' : 'text-bg-danger' } rounded-pill `}>
                            {usuario.active ? 'Activo' : 'Inactivo'}
                          </span>
                    </td>
                     <td className='panel'>{new Date(usuario.date).toLocaleString()}</td>
                     <td className='panel'>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarUsuarioModal" style={{ marginRight: 15 }}>
                      Editar
                    </button>
                    <button 
                    type='button'
                    className='btn btn-danger'
                    onClick={()=> eliminarUsuario(usuario._id)}>Eliminar
                     </button>
                    
                     </td>
                 </tr>
                 
                 ))}
                    
                </tbody>
            </table>
        </div>
        {selectedUserIndex !== null && (
        <div className="modal" id="editarUsuarioModal" tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role='document'>
               <div className="modal-content">
                   <div className="modal-header">
                        <h5 className="modal-title">Editar Usuario: {usuarios[selectedUserIndex].username}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
       <div className="modal-body">
       
        <form id="editarUsuarioForm">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type={showPassword ? 'text' : 'password'} name='password' className="form-control" id="password" value={password} onChange={handleInputChange} autoComplete="off" required/>
            <button type="button" className="editarUserButon" onClick={handleTogglePassword} aria-pressed={showPassword}>
              <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
            </button>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label" style={{marginRight: 25}}>Rol</label>
            <select
              name='role'
              value={role}
              onChange={handleInputChange}
              required
            > 
              <option value="Operario">Operario</option>
              <option value="Inspector">Inspector</option>
              <option value="Inspector-Externo">Inspector Externo</option>
          </select>
          </div>
            <div className="mb-3">
              <label htmlFor="" style={{marginRight: 25}} >Activo</label>
              <select name="activo" value={active} onChange={handleInputChange} required>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
            </div>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label">DNI</label>
            <input type="text" className="form-control" id="dni" name='dni' value={dni} onChange={handleInputChange} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input type="text" className="form-control" id="telefono" name='telefono' value={telefono} onChange={handleInputChange} required/>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => editUserInfo(usuarios[selectedUserIndex]._id)}>Guardar Cambios</button>
        </form>
      </div>
    </div>
  </div>
</div>

 )}
    </div>
    </>
  )
}

