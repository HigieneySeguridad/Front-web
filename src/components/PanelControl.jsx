import {useState, useEffect} from 'react'
import axios from "axios"


export const PanelControl = () => {
const [usuarios, setUsuarios] = useState([]);

const baseUrl = "http://localhost:3000/registrar";

const fetchUsuario = async () => {
    try {
      const response = await axios.get(baseUrl);
      setUsuarios(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/registrar/${id}`);
      fetchUsuario();
      console.log('Usuario eliminado correctamente');
      alert('Usuario eliminado!');
    } catch (error) {
      console.log(error.message);
    }
  };
  
  useEffect(()=>{
    fetchUsuario();
  },[]);

  return (
    <div className='container' id='content-area'>
        <div className='section-title'>
        <h2>Panel de Control</h2>
        </div>
        <div className='table-responsive'>
            <table>
                <thead>
                    <tr>
                        <th>Usuarios</th>
                        <th>Tipo de Usuario</th>
                        <th>Fecha de Alta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i)=>(
                <tr key={i}>
                     <td className='panel'>{usuario.user}</td>
                     <td className='panel'>{usuario.role}</td>
                     <td className='panel'>{usuario.fecha}</td>
                     <td className='panel'>
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
    </div>
  )
}

