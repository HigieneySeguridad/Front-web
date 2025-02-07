import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom';

export const GetRiesgos = () => {
  const {id, idNotificacion} = useParams()
  const location = useLocation();
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
        checkbox27: false
      });

      const traerForm = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/formularios/${id}`);
          if (response.status === 200) {
            // Filtrar los formularios de Protección y establecer los valores de los checkboxes
            const formulariosRiesgos = response.data.riesgos;
            setCheckboxValues(formulariosRiesgos);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        traerForm();
      }, []);
    
    
      const tableStyle = {
        opacity: 0.7,
        cursor: "not-allowed",
        width: 1000,
        height: 400,
        marginTop: 20
      };

      const tableStyle2 = {
        opacity: 0.7,
        cursor: "not-allowed",
        marginBottom: 20,
        width: 505,
      };

  if(location.pathname === `/formularios/${id}` || location.pathname === `/notificaciones/${id}/${idNotificacion}`){
  return (
    <div>
          <table className="table table-striped table-sm" style={tableStyle}>
        <thead>
        <tr>
        <th colSpan={6} style={{background: '#FFD700'}}>Riesgos y consecuencias</th>
       </tr>
        </thead>
   
    <tbody>
    <tr>
    <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1}/> A- Atrapado en</div></td>
    <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2}/> N- Caida de objetos por desplome o desprendimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3}/> B- Atrapado entre</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4}/> O- Atrapamiento por vuelco de maquinarias</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5}/> C- Atrapado bajo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6}/> P- Atropellos, golpes, choques contra o con vehiculos</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}/> D- Corte/punciones/laceraciones</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}/> Q- Accidentes en vehiculos terrestres</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}/> E- Exposicion Calor/Frio (carga termica) </div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10}/> R- Hundimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11}/> F- Caida de objetos por manipulacion</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12}/> S- Descarga electrica</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13}/> G- Ignicion</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14}/> T- Resbalon/tropiezo/caida</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15}/> H- Sobreesfuerzo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16}/> U- Picadura y/o mordeduras de animales e insectos</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17}/> I- Golpeado por</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18}/> V- Quemaduras</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19}/> J- Golpe contra</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20}/> W- Explosion/incendio</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21}/> K- Proyeccion de particulas/salpicaduras</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22}/> X- Asfixia/Desmayo</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23}/> L- Caida de personas a mismo nivel</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24}/> Y-Problemas respiratorios</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25}/> LL- Caida de personas a distinto nivel</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26}/> Z- Otro</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27}/> M- Caida a instalaciones de bajo nivel</div></td>
            <td></td>
        </tr>

    </tbody>
    </table>
    </div>
  )
}
if(location.pathname === `/archivos/${id}`){
  return (
    <div>
          <table className="table table-striped table-sm" style={tableStyle2}>
        <thead>
        <tr>
        <th colSpan={6} style={{background: '#FFD700'}}>Riesgos y consecuencias</th>
       </tr>
        </thead>
   
    <tbody>
    <tr>
    <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1}/> A- Atrapado en</div></td>
    <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2}/> N- Caida de objetos por desplome o desprendimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3}/> B- Atrapado entre</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4}/> O- Atrapamiento por vuelco de maquinarias</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5}/> C- Atrapado bajo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6}/> P- Atropellos, golpes, choques contra o con vehiculos</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}/> D- Corte/punciones/laceraciones</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}/> Q- Accidentes en vehiculos terrestres</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}/> E- Exposicion Calor/Frio (carga termica) </div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10}/> R- Hundimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11}/> F- Caida de objetos por manipulacion</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12}/> S- Descarga electrica</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13}/> G- Ignicion</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14}/> T- Resbalon/tropiezo/caida</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15}/> H- Sobreesfuerzo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16}/> U- Picadura y/o mordeduras de animales e insectos</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17}/> I- Golpeado por</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18}/> V- Quemaduras</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19}/> J- Golpe contra</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20}/> W- Explosion/incendio</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21}/> K- Proyeccion de particulas/salpicaduras</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22}/> X- Asfixia/Desmayo</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23}/> L- Caida de personas a mismo nivel</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24}/> Y-Problemas respiratorios</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25}/> LL- Caida de personas a distinto nivel</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26}/> Z- Otro</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27}/> M- Caida a instalaciones de bajo nivel</div></td>
            <td></td>
        </tr>

    </tbody>
    </table>
    </div>
  )
}
}
