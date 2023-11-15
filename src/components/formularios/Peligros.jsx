import { useState } from "react";
import axios from  "axios"
import Swal from "sweetalert2"

export const Peligros = () => {
    const [comentario, setComentario] = useState("");
    const [checkboxValues, setCheckboxValues] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false,
        checkbox10: false,
        checkbox11: false,
        checkbox12: false,
        checkbox13: false,
        checkbox14: false,
        checkbox15: false,
        checkbox16: false,
        checkbox17: false,
        checkbox18: false,
        checkbox19: false,
        checkbox20: false,
        checkbox21: false,
        checkbox22: false,
        checkbox23: false,
        checkbox24: false,
        checkbox25: false,
        checkbox26: false,
        checkbox27: false,
        checkbox28: false,
        checkbox29: false,
        checkbox30: false,
        checkbox31: false,
        checkbox32: false,
        checkbox33: false,
        checkbox34: false,
        checkbox35: false,
        checkbox36: false,
        checkbox37: false,
        checkbox38: false,
        checkbox39: false,
        checkbox40: false,
        checkbox41: false
      });

      const handleCheckboxChange = (name) => {
        setCheckboxValues({
          ...checkboxValues,
          [name]: !checkboxValues[name],
        });
      };

      const checkboxesSeleccionados = Object.keys(checkboxValues)
      .filter((key) => checkboxValues[key])
      .reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});

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

      const [tableEnabled, setTableEnabled] = useState(true);
      const disabledTable = () => {
            setTableEnabled(false);
      };
      
      const tableStyle = {
        opacity: tableEnabled ? 1 : 0.5,
        cursor: tableEnabled ? "auto" : "not-allowed",
      };
  const guardarFormulario = async () => {
    try {
      console.log('Valores true', checkboxesSeleccionados, comentario);
      const response = await axios.post('http://localhost:3000/formularios/peligros', {checkboxes: checkboxesSeleccionados, comentario});

      if (response.status === 200) {
        console.log('Enviado correctamente');
        disabledTable()
        Swal.fire({
          title: 'Enviado correctamente ',
          icon: 'success'
        })
      } else {
        console.log('No se pudo enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };
 
  return (
    <div>
    <table className="table table-striped table-sm" aria-disabled={!tableEnabled} style={tableStyle}>
        <thead>
        <tr>
        <th colSpan={6} style={{background: 'red'}}>Peligros</th>
       </tr>
        </thead>
   
    <tbody>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox1} onChange={() => handleCheckboxChange('checkbox1')}/> 1- Animales ponzoñosos/venenosos</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox2} onChange={() => handleCheckboxChange('checkbox2')}/> 15- Mala iluminacion </td>
                <td><input type="checkbox" checked={checkboxValues.checkbox3} onChange={() => handleCheckboxChange('checkbox3')}/> 29- Sustancias toxicas</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox4} onChange={() => handleCheckboxChange('checkbox4')} /> 2- Hidrocarburo/combustible</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox5} onChange={() => handleCheckboxChange('checkbox5')}/> 16- Objetos/equipos caidos</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox6} onChange={() => handleCheckboxChange('checkbox6')} /> 30- Liquidos inflamables</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox7} onChange={() => handleCheckboxChange('checkbox7')} /> 3- Sustancia corrosivas</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox8} onChange={() => handleCheckboxChange('checkbox8')} /> 17- Liberacion/derrame</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox9} onChange={() => handleCheckboxChange('checkbox9')} /> 31- Herramientas electricas/manuales/neumatica</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox10} onChange={() => handleCheckboxChange('checkbox10')} /> 4- Superficie fría/caliente</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox11} onChange={() => handleCheckboxChange('checkbox11')} /> 18- Agentes biologicos </td>
                <td><input type="checkbox" checked={checkboxValues.checkbox12} onChange={() => handleCheckboxChange('checkbox12')} /> 32- Equipo/Material pesado</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox13} onChange={() => handleCheckboxChange('checkbox13')} /> 5- Comunicación restringida</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox14} onChange={() => handleCheckboxChange('checkbox14')} /> 19- Equipos/insatalaciones a Presion</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox15} onChange={() => handleCheckboxChange('checkbox15')} /> 33- Empleado nuevo</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox16} onChange={() => handleCheckboxChange('checkbox16')} /> 6- Espacio confinado</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox17} onChange={() => handleCheckboxChange('checkbox17')} /> 20- Radiacion </td>
                <td><input type="checkbox" checked={checkboxValues.checkbox18} onChange={() => handleCheckboxChange('checkbox18')} /> 34- Personal nuevo</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox19} onChange={() => handleCheckboxChange('checkbox19')} /> 7- Espacio restringido</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox20} onChange={() => handleCheckboxChange('checkbox20')} /> 21- Vision Restringida</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox21} onChange={() => handleCheckboxChange('checkbox21')} /> 35- Tarea Nueva/Desconocida</td>
            </tr>
            
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox22} onChange={() => handleCheckboxChange('checkbox22')} /> 8- Equipos electricos</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox23} onChange={() => handleCheckboxChange('checkbox23')} /> 22- Peatones</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox24} onChange={() => handleCheckboxChange('checkbox24')} /> 36- Polvo</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox25} onChange={() => handleCheckboxChange('checkbox25')} /> 9- Animales sueltos</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox26} onChange={() => handleCheckboxChange('checkbox26')} /> 23- Circulacion Vehicular</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox27} onChange={() => handleCheckboxChange('checkbox27')} /> 37- Terreno inestable</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox28} onChange={() => handleCheckboxChange('checkbox28')} /> 10- Sustancia Asfixiante(gases-vapores)</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox29} onChange={() => handleCheckboxChange('checkbox29')} /> 24- Ruido</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox30} onChange={() => handleCheckboxChange('checkbox30')} /> 38- Terreno con Pendiente</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox31} onChange={() => handleCheckboxChange('checkbox31')} /> 11- Trabajo en altura</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox32} onChange={() => handleCheckboxChange('checkbox32')} /> 25- Explosivos</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox33} onChange={() => handleCheckboxChange('checkbox33')} /> 39- Escaleras</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox34} onChange={() => handleCheckboxChange('checkbox34')} /> 12- H2S</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox35} onChange={() => handleCheckboxChange('checkbox35')} /> 26- Camino polvoriento</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox36} onChange={() => handleCheckboxChange('checkbox36')} /> 40- Elemento saliente</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox37} onChange={() => handleCheckboxChange('checkbox37')} /> 13- Equipo/Maquinaria de carga</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox38} onChange={() => handleCheckboxChange('checkbox38')} /> 27- Sol/Lluvia/Granizo/Viento</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox39} onChange={() => handleCheckboxChange('checkbox39')} /> 41- Otro</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked={checkboxValues.checkbox40} onChange={() => handleCheckboxChange('checkbox40')} /> 14- Objetos en movimientos</td>
                <td><input type="checkbox" checked={checkboxValues.checkbox41} onChange={() => handleCheckboxChange('checkbox41')} /> 28- Superficies Resbaladizas</td>
                <td></td>
            </tr>
    </tbody>
    </table>
    <div className="botonesGrupo">
      <button onClick={submitText} style={{marginRight: 15}} className="btn btn-danger"> Escribe un comentario </button>
      <button onClick={guardarFormulario} className="btn btn-danger">Enviar</button>
    </div>
    </div>
  )
}

