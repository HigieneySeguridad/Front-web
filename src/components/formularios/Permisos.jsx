import { Medidas } from './Medidas';
import { Peligros } from './Peligros';
import { ProteccionPersonal } from './ProteccionPersonal';
import { Riesgos } from './Riesgos';

export const Permisos = () => {
  return (
  <>
    <div className='container'>
      <h2 className="section-title" style={{color: "#012970"}}>Análisis de Trabajo Seguro</h2>
      <ProteccionPersonal/>

      <Peligros/>
      
      <Riesgos/>
      
      <Medidas/>
           
    </div>
  </>
  )
}


