import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"

export const ProteccionPersonal = () => {
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
    checkbox31: false
  });

  const handleCheckboxChange = (name) => {
    setCheckboxValues({
      ...checkboxValues,
      [name]: !checkboxValues[name],
    });
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
  
 const checkboxesSeleccionados = Object.keys(checkboxValues)
      .filter((key) => checkboxValues[key])
      .reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});

  const guardarFormulario = async () => {
  
    try {
      console.log('Valores true', checkboxesSeleccionados, comentario );
      const response = await axios.post('http://localhost:3000/formularios/proteccion', {checkboxes: checkboxesSeleccionados, comentario } );

      if (response.status === 200) {
        console.log('Enviado correctamente');
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
    <table className="table table-striped table-sm">
    <thead>
        <tr>
            <th colSpan={6} style={{background: 'skyblue'}}>Elementos de Protección Personal</th>
        </tr>
      <tr>
        <th style={{background: 'skyblue'}} scope="col">Protección de Cabeza y Cuerpo</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Ojos y Cara</th>
        <th style={{background: 'skyblue'}} scope="col">Protección Auditiva</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Manos</th>
        <th style={{background: 'skyblue'}} scope="col">Protección Respiratoria</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Pies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
            <td>
              <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1} onChange={() => handleCheckboxChange('checkbox1')}/> Casco de Seguridad
              </div>
            </td>
            <td>
              <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2} onChange={() => handleCheckboxChange('checkbox2')}/>Gafas de seguridad
              </div>
            </td>
            <td>
            <div className="form-check form-switch">
            <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3} onChange={() => handleCheckboxChange('checkbox3')}/> Protectores de copa
            </div>
           
            </td>
            <td>
              <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4} onChange={() => handleCheckboxChange('checkbox4')}/> Guante de Vaqueta
              </div>
            </td>
            <td>
              <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5} onChange={() => handleCheckboxChange('checkbox5')}/> Equipo de escape
              </div>
            </td>
            <td>
              <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6} onChange={() => handleCheckboxChange('checkbox6')}/> Botas/cuero con puntas
              </div>
            </td>
        
      </tr>
      <tr>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7} onChange={() => handleCheckboxChange('checkbox7')} /> Cofia
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8} onChange={() => handleCheckboxChange('checkbox8')} /> Antiparras
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9} onChange={() => handleCheckboxChange('checkbox9')} /> Protectores Endoaurales Expansible
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10} onChange={() => handleCheckboxChange('checkbox10')} /> Guante de Nitrilo
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11} onChange={() => handleCheckboxChange('checkbox11')} /> Máscara facial con filtro
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12} onChange={() => handleCheckboxChange('checkbox12')} /> Botas/goma con punteras
    </div>
  </td>
</tr>
<tr>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13} onChange={() => handleCheckboxChange('checkbox13')} /> Ropa de Trabajo
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14} onChange={() => handleCheckboxChange('checkbox14')} /> Máscara de soldador
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15} onChange={() => handleCheckboxChange('checkbox15')} /> Otro
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16} onChange={() => handleCheckboxChange('checkbox16')} /> Guante Soldador
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17} onChange={() => handleCheckboxChange('checkbox17')} /> Semi máscara facial C/filtro
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18} onChange={() => handleCheckboxChange('checkbox18')} /> Zapatilla de seguridad
    </div>
  </td>
</tr>
<tr>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19} onChange={() => handleCheckboxChange('checkbox19')} /> Ropa resistente a sust. quim.
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20} onChange={() => handleCheckboxChange('checkbox20')} /> Protector facial/máscara
    </div>
  </td>
  <td></td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21} onChange={() => handleCheckboxChange('checkbox21')} /> Guantes PVC
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22} onChange={() => handleCheckboxChange('checkbox22')} /> Ventiladores
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23} onChange={() => handleCheckboxChange('checkbox23')} /> Botín con puntera
    </div>
  </td>
</tr>
<tr>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24} onChange={() => handleCheckboxChange('checkbox24')} /> Capa de lluvia
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25} onChange={() => handleCheckboxChange('checkbox25')} /> Otro
    </div>
  </td>
  <td></td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26} onChange={() => handleCheckboxChange('checkbox26')} /> Guante de kevlar
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27} onChange={() => handleCheckboxChange('checkbox27')} /> Purificadores de aire
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28} onChange={() => handleCheckboxChange('checkbox28')} /> Otro
    </div>
  </td>
</tr>
<tr>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29} onChange={() => handleCheckboxChange('checkbox29')} /> Arnés de Seguridad
    </div>
  </td>
  <td></td>
  <td></td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30} onChange={() => handleCheckboxChange('checkbox30')} /> Otro
    </div>
  </td>
  <td>
    <div className="form-check form-switch">
      <input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31} onChange={() => handleCheckboxChange('checkbox31')} /> Barbijos
    </div>
  </td>
  <td></td>
</tr>
    </tbody>
  </table>
  <div className="botonesGrupo">
   <button onClick={submitText} style={{marginRight: 15}} className="btn btn-info"> Escribe un comentario </button>
   <button onClick={guardarFormulario} className="btn btn-info">Enviar</button>
  </div>
   </div>
  )
}

