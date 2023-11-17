import { Medidas } from './Medidas';
import { Peligros } from './Peligros';
import { ProteccionPersonal } from './ProteccionPersonal';
import { Riesgos } from './Riesgos';
import React, {useEffect, useState} from 'react'
import axios from "axios"
import Swal from 'sweetalert2'

export const Permisos = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [guardadoCorrecto, setGuardadoCorrecto] = useState(false);
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

  const [checkboxProteccion, setCheckboxesProteccion] = useState({});
  const [checkboxPeligros, setCheckboxesPeligros] = useState({});
  const [checkboxRiesgos, setCheckboxesRiesgos] = useState({});
  const [checkboxMedidas, setCheckboxesMedidas] = useState({});

  const [comentarioProteccion, setComentarioProteccion] = useState('');
  const [comentarioPeligros, setComentarioPeligros] = useState('');
  const [comentarioRiesgos, setComentarioRiesgos] = useState('');
  const [comentarioMedidas, setComentarioMedidas] = useState('');

 
  const proteccionData = {
    checkboxes: checkboxProteccion,
    comentario: comentarioProteccion,
  };
  const peligrosData = {
    checkboxes: checkboxPeligros,
    comentario: comentarioPeligros,
  };
  const riesgosData = {
    checkboxes: checkboxRiesgos,
    comentario: comentarioRiesgos,
  }; 
  const medidasData = {
    checkboxes: checkboxMedidas,
    comentario: comentarioMedidas,
  };


  const fechaEnvio = new Date()

  
  const handleEnviarFormulario = async () => {
    try {
     
      if (
        guardadoProteccionPersonal &&
        guardadoPeligros &&
        guardadoRiesgos &&
        guardadoMedidas
      ) {
        
        const formulariosData = [
          proteccionData,
          peligrosData,
          riesgosData,
          medidasData,
        ]

        formulariosData.forEach(formulario => {
          formulario.fecha = fechaEnvio;
        });

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
        console.log('No todos los formularios están guardados correctamente');
      }
    } catch (error) {
      console.error('Error al enviar formularios', error);
    }
  };

  return (
  <>
    <div className='container'>
      <h2 className="section-title" style={{color: "#012970"}}>Análisis de Trabajo Seguro</h2>

      <ProteccionPersonal 
      onGuardadoChange={setGuardadoProteccionPersonal}
      onCheckboxesChange={setCheckboxesProteccion}
      onComentarioChange={setComentarioProteccion}
      />
      <Peligros 
      onGuardadoChange= {setGuardadoPeligros}
      onCheckboxesChange={setCheckboxesPeligros}
      onComentarioChange={setComentarioPeligros}
      />
      <Riesgos 
      onGuardadoChange= {setGuardadoRiesgos}
      onCheckboxesChange={setCheckboxesRiesgos}
      onComentarioChange={setComentarioRiesgos}
      />
      <Medidas 
      onGuardadoChange= {setGuardadoMedidas}
      onCheckboxesChange={setCheckboxesMedidas}
      onComentarioChange={setComentarioMedidas}
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
                     <td className='panel'>None</td>
                     <td className='panel'>
                    <button type="button" className="btn btn-primary" style={{ marginRight: 15 }}>
                      Añadir
                    </button>
                     </td>
                 </tr>
                 
                 ))}
                    
                </tbody>
            </table>
        </div>
    </div>

       <button type='submit' className='btn btn-primary' style={{margin: 30}} onClick={handleEnviarFormulario}>Enviar Formulario</button>
    </div>
  </>
  )
}


