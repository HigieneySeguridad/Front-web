import {useState} from 'react'
import Swal from "sweetalert2"
import axios from "axios"


export const Riesgos = () => {
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

    <table>
        <thead>
        <tr>
        <th colSpan={6} style={{background: '#FFA33C'}}>Riesgos y consecuencias</th>
       </tr>
        </thead>
   
    <tbody>
            <tr>
                <td><input type="checkbox" name="" id="" /> A- Atrapado en</td>
                <td><input type="checkbox" name="" id="" /> N- Caida de objetos por desplome o desprendimiento</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> B- Atrapado entre</td>
                <td><input type="checkbox" name="" id="" /> O- Atrapamiento por vuelco de maquinarias</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> C- Atrapado bajo</td>
                <td><input type="checkbox" name="" id="" /> P- Atropellos,golpes,choques contra o con vehiculos</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> D- Corte/punciones/laceraciones</td>
                <td><input type="checkbox" name="" id="" /> Q- Accidientes en vehiculos terrestres</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> E- Exposicion Calor/Frio (carga termica) </td>
                <td><input type="checkbox" name="" id="" /> R- Hundimiento</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> F- Caida de objetos por manipulacion</td>
                <td><input type="checkbox" name="" id="" /> S- Descarga electrica</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> G- Ignicion</td>
                <td><input type="checkbox" name="" id="" /> T- Resbalon/tropiezo/caida</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> H- Sobreesfuerzo</td>
                <td><input type="checkbox" name="" id="" /> U- Picadura y/o mordeduras de animales e insectos</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> I- Golpeado por</td>
                <td><input type="checkbox" name="" id="" /> V- Quemaduras</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> J- Golpe contra</td>
                <td><input type="checkbox" name="" id="" /> W- Explosion/incendio</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> K- Proyeccion de particulas/salpicaduras</td>
                <td><input type="checkbox" name="" id="" /> X- Asfixia/Desmayo</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> L- Caida de personas a mismo nivel</td>
                <td><input type="checkbox" name="" id="" /> Y-Problemas respiratorios</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> LL- Caida de personas a distinto nivel</td>
                <td><input type="checkbox" name="" id="" /> Z- Otro</td>
            </tr>
            <tr>
                <td><input type="checkbox" name="" id="" /> M- Caida a instalaciones de bajo nivel</td>
                <td></td>
            </tr>
    </tbody>
    </table> <br />
    <div>
        <label htmlFor="fileInput" className="btn btn-warning" style={{ marginLeft: 50, marginRight: 15 }}>
          Seleccione una imagen
        </label>
        <input
          type="file"
          accept="image/*"
          id="fileInput"  // Asociar el id del input con el atributo for del label
          onChange={handleFileChange}
          style={{ display: 'none' }}  // Ocultar el input (puede variar según tu estilo)
        />
        <button onClick={submitPicture} className="btn btn-warning" style={{marginRight: 15}}>
          Subir
        </button>
        <button onClick={submitText} className="btn btn-warning">
          Escribe un comentario
        </button>
    </div>
</div>
  )
}


