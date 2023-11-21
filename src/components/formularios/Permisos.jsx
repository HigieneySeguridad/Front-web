import { Medidas } from './Medidas';
import { Peligros } from './Peligros';
import { ProteccionPersonal } from './ProteccionPersonal';
import { Riesgos } from './Riesgos';
import { UserContext } from '../../context/userContext';
import React, {useContext, useEffect, useState} from 'react'
import axios from "axios"
import Swal from 'sweetalert2'

export const Permisos = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [guardadoCorrecto, setGuardadoCorrecto] = useState(false);
  const [comentario, setComentario] = useState("");
  const {state} = useContext(UserContext)
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

  const [guardadoProteccionPersonal, setGuardadoProteccionPersonal] = useState(false);
  const [guardadoPeligros, setGuardadoPeligros] = useState(false);
  const [guardadoRiesgos, setGuardadoRiesgos] = useState(false);
  const [guardadoMedidas, setGuardadoMedidas] = useState(false);

  const [proteccion, setCheckboxesProteccion] = useState({});
  const [peligros, setCheckboxesPeligros] = useState({});
  const [riesgos, setCheckboxesRiesgos] = useState({});
  const [medidas, setCheckboxesMedidas] = useState({});

  const [estado, setEstado] = useState('Pendiente')
 
  const fechaEnvio = new Date()
  
  const handleEnviarFormulario = async () => {
    try {
     
      if (
        guardadoProteccionPersonal &&
        guardadoPeligros &&
        guardadoRiesgos &&
        guardadoMedidas
      ) {
        
        const formulariosData = {
          proteccion,
          peligros,
          riesgos,
          medidas,
          fechaEnvio,
          estado: estado,
          username: state.nombre,
          comentario: comentario
        }

        const response = await axios.post('http://localhost:3000/formularios', formulariosData);

        if (response.status === 200) {
          console.log('Formularios enviados correctamente');
          setGuardadoCorrecto(true);
          Swal.fire({
            icon: 'success',
            text: 'Formulario Completo Enviado'
          })
        } else {
          console.log('Error al enviar formularios');
          Swal.fire({
            icon: 'error',
            text: 'No se pudo mandar el formulario completo'
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Formulario incompleto'
        })
        console.log('No todos los formularios están guardados correctamente');
      }
    } catch (error) {
      console.error('Error al enviar formularios', error);
    }
  };

  const submitText = async ()=>{
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      if (text) {
        Swal.fire({
          title: 'Tu comentario: ',
          text
        })
       setComentario(text)
    }
  }

  const [equipo, setEquipo] = useState({});

  const handleAñadirSolicitud = (username) => {
    setEquipo((prevEquipo) => ({
      ...prevEquipo,
      [username]: 'Pendiente',
    }));
    Swal.fire({
      title: 'Solicitud enviada',
      icon: 'success'
    })
  };

  return (
  <>
    <div className='container'>
      <h2 className="section-title" style={{color: "#012970"}}>Análisis de Trabajo Seguro</h2>

      <ProteccionPersonal 
      onGuardadoChange={setGuardadoProteccionPersonal}
      onCheckboxesChange={setCheckboxesProteccion}
      />
      <Peligros 
      onGuardadoChange= {setGuardadoPeligros}
      onCheckboxesChange={setCheckboxesPeligros}
      />
      <Riesgos 
      onGuardadoChange= {setGuardadoRiesgos}
      onCheckboxesChange={setCheckboxesRiesgos}
      />
      <Medidas 
      onGuardadoChange= {setGuardadoMedidas}
      onCheckboxesChange={setCheckboxesMedidas}
      />

      <div style={{marginBottom: 30}}>
      <h2 className='section-title' style={{color: "#012970"}}>Equipo de Trabajo</h2>
      <div className='small'>
            <table>
                <thead>
                    <tr>
                        <th>Compañeros</th>
                        <th>Estado de Solicitud</th>
                        <th>Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i)=>(
                <tr key={i}>
                     <td className='panel'>{usuario.username}</td>
                     <td className='panel'>
                        <span className={`badge ${equipo[usuario.username] === 'Aceptado' ? 'text-bg-success' : 'text-bg-danger'} rounded-pill `}>
                          {equipo[usuario.username] || 'None'}
                        </span>
                     </td>

                     <td className='panel'>
                    <button onClick={() => handleAñadirSolicitud(usuario.username)} type="button" className="btn btn-primary" style={{ marginRight: 15 }}>
                      Añadir
                    </button>
                     </td>
                 </tr>
                 
                 ))}
                    
                </tbody>
            </table>
        </div>
    </div>
       <button onClick={submitText} style={{marginRight: 15}} className="btn btn-warning"> Escribe un comentario </button>
       <button type='submit' className='btn btn-primary' style={{margin: 30}} onClick={handleEnviarFormulario}>Enviar Formulario</button>
    </div>
  </>
  )
}


