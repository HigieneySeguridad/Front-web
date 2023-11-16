import { useState, useEffect } from 'react';
import { Medidas } from './Medidas';
import { Peligros } from './Peligros';
import { ProteccionPersonal } from './ProteccionPersonal';
import { Riesgos } from './Riesgos';
import axios from "axios"

export const Permisos = () => {
  const [usuarios, setUsuarios] = useState([]);
  const baseUrl = "http://localhost:3000/registrar";

  const fetchUsuario = async () => {
    try {
      const response = await axios.get(baseUrl);

      if (response.status === 200) {
       
        const operarios = response.data.filter((usuario) => usuario.role === "Operario");
        console.log(operarios)
        setUsuarios(operarios);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsuario();
  }, []);


  return (
  <>
    <div className='container'>
      <h2 className="section-title" style={{color: "#012970"}}>Análisis de Trabajo Seguro</h2>
      <ProteccionPersonal/>

      <Peligros/>
      
      <Riesgos/>
      
      <Medidas/>


       <h2 className='section-title' style={{color: "#012970"}}>Equipo de Trabajo</h2>
      <div className='table-responsive small'>
            <table>
                <thead>
                    <tr>
                        <th>Usuarios</th>
                        <th>Estado de Solicitud</th>
                        <th>Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i)=>(
                <tr key={i}>
                     <td className='panel'>{usuario.username}</td>
                     <td className='panel'>None</td>
                     <td className='panel'>
                    <button type="button" className="btn btn-primary" style={{ marginRight: 15 }}>
                      Enviar solicitud
                    </button>
                     </td>
                 </tr>
                 
                 ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  </>
  )
}


