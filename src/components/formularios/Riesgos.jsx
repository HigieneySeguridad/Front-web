import { useState } from "react";
import Swal from "sweetalert2"
import axios from "axios"

export const Riesgos = () => {
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
          console.log('Valores true', checkboxesSeleccionados, comentario );
          const response = await axios.post('http://localhost:3000/formularios', {checkboxes: checkboxesSeleccionados, comentario } );
    
          if (response.status === 200) {
            console.log('Enviado correctamente');
            disabledTable()
            await Swal.fire({
              title: 'Guardado correctamente',
              icon: 'success'
            })
          } else {
            console.log('No se pudo enviar el formulario');
          }
        } catch (error) {
    
          await Swal.fire({
            title: 'No se pudo enviar',
            icon: 'error'
          })
          console.error('Error al enviar el formulario', error);
        }
      };



  return (
    <div>
    <table className="table table-striped table-sm" aria-disabled={!tableEnabled} style={tableStyle}>
        <thead>
        <tr>
        <th colSpan={6} style={{background: '#FFD700'}}>Riesgos y consecuencias</th>
       </tr>
        </thead>
   
    <tbody>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox1} onChange={() => handleCheckboxChange('checkbox1')}/> A- Atrapado en</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox2} onChange={() => handleCheckboxChange('checkbox2')}/> N- Caida de objetos por desplome o desprendimiento</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox3} onChange={() => handleCheckboxChange('checkbox3')}/> B- Atrapado entre</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox4} onChange={() => handleCheckboxChange('checkbox4')} /> O- Atrapamiento por vuelco de maquinarias</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox5} onChange={() => handleCheckboxChange('checkbox5')} /> C- Atrapado bajo</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox6} onChange={() => handleCheckboxChange('checkbox6')} /> P- Atropellos,golpes,choques contra o con vehiculos</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox7} onChange={() => handleCheckboxChange('checkbox7')} /> D- Corte/punciones/laceraciones</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox8} onChange={() => handleCheckboxChange('checkbox8')} /> Q- Accidientes en vehiculos terrestres</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox9} onChange={() => handleCheckboxChange('checkbox9')} /> E- Exposicion Calor/Frio (carga termica) </td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox10} onChange={() => handleCheckboxChange('checkbox10')} /> R- Hundimiento</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox11} onChange={() => handleCheckboxChange('checkbox11')} /> F- Caida de objetos por manipulacion</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox12} onChange={() => handleCheckboxChange('checkbox12')} /> S- Descarga electrica</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox13} onChange={() => handleCheckboxChange('checkbox13')} /> G- Ignicion</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox14} onChange={() => handleCheckboxChange('checkbox14')} /> T- Resbalon/tropiezo/caida</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox15} onChange={() => handleCheckboxChange('checkbox15')} /> H- Sobreesfuerzo</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox16} onChange={() => handleCheckboxChange('checkbox16')} /> U- Picadura y/o mordeduras de animales e insectos</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox17} onChange={() => handleCheckboxChange('checkbox17')} /> I- Golpeado por</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox18} onChange={() => handleCheckboxChange('checkbox18')} /> V- Quemaduras</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox19} onChange={() => handleCheckboxChange('checkbox19')} /> J- Golpe contra</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox20} onChange={() => handleCheckboxChange('checkbox20')} /> W- Explosion/incendio</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox21} onChange={() => handleCheckboxChange('checkbox21')} /> K- Proyeccion de particulas/salpicaduras</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox22} onChange={() => handleCheckboxChange('checkbox22')} /> X- Asfixia/Desmayo</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox23} onChange={() => handleCheckboxChange('checkbox23')} /> L- Caida de personas a mismo nivel</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox24} onChange={() => handleCheckboxChange('checkbox24')} /> Y-Problemas respiratorios</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox25} onChange={() => handleCheckboxChange('checkbox25')} /> LL- Caida de personas a distinto nivel</td>
                <td><input type="checkbox" checked= {checkboxValues.checkbox26} onChange={() => handleCheckboxChange('checkbox26')} /> Z- Otro</td>
            </tr>
            <tr>
                <td><input type="checkbox" checked= {checkboxValues.checkbox27} onChange={() => handleCheckboxChange('checkbox27')} /> M- Caida a instalaciones de bajo nivel</td>
                <td></td>
            </tr>
    </tbody>
    </table>
  <div className="botonesGrupo">
   <button onClick={submitText} style={{marginRight: 15}} className="btn btn-warning"> Escribe un comentario </button>
   <button onClick={guardarFormulario} className="btn btn-warning">Enviar</button>
  </div>
    </div>
  )
}


