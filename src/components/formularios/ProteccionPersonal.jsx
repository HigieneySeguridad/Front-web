import Swal from 'sweetalert2'
import axios from 'axios';
import { useState } from "react";

export const ProteccionPersonal = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
      const submitPicture = async () => {
          const formData = new FormData();
         
          formData.append('image', selectedFile);
  
          const response = await axios.post('http://localhost:3000/upload', formData);
  
          if(response.status === 200){
            Swal.fire({
              icon: 'success',
              title: 'Imagen subida'
            })
            console.log("imagen subida")
          }
  
          if(response.status === 400){
            Swal.fire({
              icon: 'error',
              title: 'Hubo un error al subir la imagen'
            })
            console.log("imagen no se subio")
          }

          if(response.status === 500){
            Swal.fire({
              icon: 'error',
              title: 'Seleccione una imagen'
            })
            console.log("imagen no se subio")
          }
          
          }
  
  
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
              Swal.fire(text)
            }
        }
  return (
    <div style={{marginBottom: 70}}>
    <table>
    <thead>
        <tr>
            <th colSpan={6} style={{background: 'skyblue'}}>Elementos de Protección Personal</th>
        </tr>
      <tr>
        <th style={{background: 'skyblue'}}>Protección de Cabeza y Cuerpo</th>
        <th style={{background: 'skyblue'}}>Protección de Ojos y Cara</th>
        <th style={{background: 'skyblue'}}>Protección Auditiva</th>
        <th style={{background: 'skyblue'}}>Protección de Manos</th>
        <th style={{background: 'skyblue'}}>Protección Respiratoria</th>
        <th style={{background: 'skyblue'}}>Protección de Pies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox"/> Casco de Seguridad</td>
        <td><input type="checkbox"/> Gafas de seguridad</td>
        <td><input type="checkbox"/> Protectores de copa</td>
        <td><input type="checkbox"/> Guante de Vaqueta</td>
        <td><input type="checkbox"/> Equipo de escape</td>
        <td><input type="checkbox"/> Botas/cuero con puntas</td>
        
      </tr>
      <tr>
        <td><input type="checkbox"/> Cofia</td>
        <td><input type="checkbox"/> Antiparras</td>
        <td><input type="checkbox"/> Protectores Endoaurales/Expansible</td>
        <td><input type="checkbox"/> Guante de Nitrilo</td>
        <td><input type="checkbox"/> Máscara facial con filtro</td>
        <td><input type="checkbox"/> Botas/goma con punteras</td>
        
      </tr>
      <tr>
      <td><input type="checkbox"/> Ropa de Trabajo</td>
        
        <td><input type="checkbox"/> Máscara de soldador</td>
        <td><input type="checkbox"/> Otro</td>
        <td><input type="checkbox"/> Guante Soldador</td>
        <td><input type="checkbox"/> Semi máscara facial C/filtro</td>
        <td><input type="checkbox"/> Zapatilla de seguridad</td>
        
      </tr>
      <tr>
        <td><input type="checkbox"/> Ropa resistente a sust. quim.</td>
        <td><input type="checkbox"/> Protector facial/máscara</td>
        <td></td>
        <td><input type="checkbox"/> Guantes PVC</td>
        <td><input type="checkbox"/> Ventiladores</td>
        <td><input type="checkbox"/> Botín con puntera</td>
        
      </tr>
      <tr>
        <td><input type="checkbox"/> Capa de lluvia</td>
        <td><input type="checkbox"/> Otro</td>
        <td></td>
        <td><input type="checkbox"/> Guante de kevlar</td>
        <td><input type="checkbox"/> Purificadores de aire</td>
        <td><input type="checkbox"/> Otro</td>
        
      </tr>
      <tr>
        <td><input type="checkbox"/> Arnés de Seguridad</td>
        <td></td>
        <td></td>
        <td><input type="checkbox"/> Otro</td>
        <td><input type="checkbox"/> Barbijos</td>
        <td></td>
        
      </tr>
    </tbody>
  </table>
  <br />
 
  <div>
      <label htmlFor="fileInput" className="btn btn-info" style={{ marginLeft: 50, marginRight: 15 }}>
        Seleccione una imagen
      </label>
      <input
        type="file"
        accept="image/*"
        id="fileInput"  // Asociar el id del input con el atributo for del label
        onChange={handleFileChange}
        style={{ display: 'none' }}  // Ocultar el input (puede variar según tu estilo)
      />
      <button onClick={submitPicture} className="btn btn-info" style={{marginRight: 15}}>
        Subir
      </button>
      <button onClick={submitText} className="btn btn-info">
        Escribe un comentario
      </button>
  </div>

    </div>
  )
}

