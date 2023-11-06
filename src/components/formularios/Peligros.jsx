import {useState} from 'react'
import Swal from "sweetalert2"
import axios from "axios"

export const Peligros = () => {
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
    <div className="table-responsive">

    <table className="table table-striped table-sm">
        <thead>
        <tr>
        <th colSpan={6} style={{background: 'red'}}>Peligros</th>
       </tr>
        </thead>
   
    <tbody>
            <tr>
                <td><input type="checkbox" name="" id="" /> 1- Animales ponzoñosos/venenosos</td>
                <td><input type="checkbox" name="" id="" /> 15- Mala iluminacion </td>
                <td><input type="checkbox" name="" id="" /> 29- Sustancias toxicas</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 2- Hidrocarburo/combustible</td>
                <td><input type="checkbox" name="" id="" /> 16- Objetos/equipos caidos</td>
                <td><input type="checkbox" name="" id="" /> 30- Liquidos inflamables</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 3- Sustancia corrosivas</td>
                <td><input type="checkbox" name="" id="" /> 17- Liberacion/derrame</td>
                <td><input type="checkbox" name="" id="" /> 31- Herramientas electricas/manuales/neumatica</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 4- Superficie fría/caliente</td>
                <td><input type="checkbox" name="" id="" /> 18- Agentes biologicos </td>
                <td><input type="checkbox" name="" id="" /> 32- Equipo/Material pesado</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 5- Comunicación restringida</td>
                <td><input type="checkbox" name="" id="" /> 19- Equipos/insatalaciones a Presion</td>
                <td><input type="checkbox" name="" id="" /> 33- Empleado nuevo</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 6- Espacio confinado</td>
                <td><input type="checkbox" name="" id="" /> 20- Radiacion </td>
                <td><input type="checkbox" name="" id="" /> 34- Personal nuevo</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 7- Espacio restringido</td>
                <td><input type="checkbox" name="" id="" /> 21- Vision Restringida</td>
                <td><input type="checkbox" name="" id="" /> 35- Tarea Nueva/Desconocida</td>
            </tr>
            
            <tr>
                <td><input type="checkbox" name="" id="" /> 8- Equipos electricos</td>
                <td><input type="checkbox" name="" id="" /> 22- Peatones</td>
                <td><input type="checkbox" name="" id="" /> 36- Polvo</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 9- Animales sueltos</td>
                <td><input type="checkbox" name="" id="" /> 23- Circulacion Vehicular</td>
                <td><input type="checkbox" name="" id="" /> 37- Terreno inestable</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 10- Sustancia Asfixiante(gases-vapores)</td>
                <td><input type="checkbox" name="" id="" /> 24- Ruido</td>
                <td><input type="checkbox" name="" id="" /> 38- Terreno con Pendiente</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 11- Trabajo en altura</td>
                <td><input type="checkbox" name="" id="" /> 25- Explosivos</td>
                <td><input type="checkbox" name="" id="" /> 39- Escaleras</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 12- H2S</td>
                <td><input type="checkbox" name="" id="" /> 26- Camino polvoriento</td>
                <td><input type="checkbox" name="" id="" /> 40- Elemento saliente</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 13- Equipo/Maquinaria de carga</td>
                <td><input type="checkbox" name="" id="" /> 27- Sol/Lluvia/Granizo/Viento</td>
                <td><input type="checkbox" name="" id="" /> 41- Otro</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> 14- Objetos en movimientos</td>
                <td><input type="checkbox" name="" id="" /> 28- Superficies Resbaladizas</td>
                <td></td>
            </tr>
    </tbody>
    </table>
    <br />
    <div>
          <label htmlFor="fileInput" className="btn btn-danger" style={{ marginLeft: 50, marginRight: 15 }}>
            Seleccione una imagen
          </label>
          <input
            type="file"
            accept="image/*"
            id="fileInput"  // Asociar el id del input con el atributo for del label
            onChange={handleFileChange}
            style={{ display: 'none' }}  // Ocultar el input (puede variar según tu estilo)
          />
          <button onClick={submitPicture} className="btn btn-danger" style={{marginRight: 15}}>
            Subir
          </button>
          <button onClick={submitText} className="btn btn-danger">
            Escribe un comentario
          </button>
    </div>
</div>
  )
}

