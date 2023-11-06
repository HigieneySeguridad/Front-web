import {useState} from 'react'
import Swal from "sweetalert2"
import axios from "axios"

export const Medidas = () => {
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
    <div className="table-responsive small">
    <table className="table table-striped table-sm">
    <thead>
         <tr>
          <th colSpan={6} style={{background: 'green'}}>Medidas de control y mitigación</th>
         </tr>
    </thead>
    <tbody>
      
        <tr>
            <td><input type="checkbox" name="" id="" /> A- Ojos y mente en tarea</td>
            <td><input type="checkbox" name="" id="" /> K- Señalización/delimitación</td>
            <td><input type="checkbox" name="" id="" /> T- Luces Encendidas</td>
            <td><input type="checkbox"/> AD- Kit antiderrame</td>
        </tr>
        <tr>
            <td><input type="checkbox"/> B- Persona Guía</td>
            <td><input type="checkbox"/> L- Puesta a Tierra</td>
            <td><input type="checkbox"/> U- Uso de cinturón de seguridad</td>
            <td><input type="checkbox"/> AE- Sujeción andamios - Carga - Otros</td>
        </tr>
        <tr>
            <td><input type="checkbox"/> C- Movimiento lento y continuo</td>
            <td><input type="checkbox"/> LL- Desenergización</td>
            <td><input type="checkbox"/> V- Colocación de chapa ciega</td>
            <td><input type="checkbox" /> AF- Estabilización de carga</td>
        </tr>
        <tr>
            <td><input type="checkbox" /> D- Inspección visual previa</td>
            <td><input type="checkbox" /> M- Desprezurización</td>
            <td><input type="checkbox" /> W- Comunicación permanente</td>
            <td><input type="checkbox" /> AG- Coordinación de movimiento</td>
        </tr>
        <tr>
            <td><input type="checkbox" /> E- Monitoreo de Gases</td>
            <td><input type="checkbox" /> N- Orden y Limpieza</td>
            <td><input type="checkbox" /> X- Descanzo intermedio</td>
            <td><input type="checkbox" /> AH- Personal capacitado</td>
        </tr>
        <tr>
            <td><input type="checkbox" /> F- Manejo defensivo</td>
            <td><input type="checkbox" /> Ñ- Talud/apuntalamiento</td>
            <td><input type="checkbox" /> Y- Hidratación</td>
            <td><input type="checkbox" /> AI- Otros/No Especificado</td>
        </tr>
        <tr>
            <td><input type="checkbox" /> G- Uso de EPP</td>
            <td><input type="checkbox" /> O- Sistema contracaída</td>
            <td><input type="checkbox" /> Z- Rotación del personal</td>
            <td></td>
        </tr>
        <tr>
            <td><input type="checkbox" /> H- Extintor</td>
            <td><input type="checkbox" /> P- Hojas de seguridad</td>
            <td><input type="checkbox" /> AA- Elemento de izaje en condición</td>
            <td></td>
        </tr>
        <tr>
            <td><input type="checkbox" /> I- Supervisión</td>
            <td><input type="checkbox" /> Q- Soga Guía</td>
            <td><input type="checkbox" /> AB- Herramienta en condición</td>
            <td></td>
        </tr>
        <tr>
            <td><input type="checkbox" /> J- Bloqueo y etiquetado</td>
            <td><input type="checkbox" /> R- Respetar velocidades</td>
            <td><input type="checkbox" /> AC- Botiquín P.A</td>
            <td></td>
        </tr>
       
    </tbody>
  </table> <br />
  <div>
      <label htmlFor="fileInput" className="btn btn-success" style={{ marginLeft: 50, marginRight: 15 }}>
        Seleccione una imagen
      </label>
      <input
        type="file"
        accept="image/*"
        id="fileInput"  // Asociar el id del input con el atributo for del label
        onChange={handleFileChange}
        style={{ display: 'none' }}  // Ocultar el input (puede variar según tu estilo)
      />
      <button onClick={submitPicture} className="btn btn-success" style={{marginRight: 15}}>
        Subir
      </button>
      <button onClick={submitText} className="btn btn-success">
        Escribe un comentario
      </button>
  </div>
    </div>
  )
}

