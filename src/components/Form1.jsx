import {Aside} from "./Aside"
import {ComentarioConFoto} from "./Comments"
export const Form1 = () => {
  return (
    <>
    <Aside/>
    <div className='container'>
    <div className='table-responsive'>
    <table border="1">
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
        <td><input type="checkbox"/> Botas de cuero con punteras</td>
        
      </tr>
      <tr>
        <td><input type="checkbox"/> Cofia</td>
        <td><input type="checkbox"/> Antiparras</td>
        <td><input type="checkbox"/> Protectores Endoaurales/Expansible</td>
        <td><input type="checkbox"/> Guante de Nitrilo</td>
        <td><input type="checkbox"/> Máscara facial con filtro</td>
        <td><input type="checkbox"/> Botas de Goma con punteras</td>
        
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
    <ComentarioConFoto/>
  </table>
    </div>
 <br /> <br />
    <div className="table-responsive">

        <table>
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
    </div>
    <br /> <br />
    <div className="table-responsive">

        <table>
            <thead>
            <tr>
            <th colSpan={6} style={{background: 'yellow'}}>Riesgos y consecuencias</th>
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
        </table>
    </div>
    <br /><br />
    <div className="table-responsive">
    <table>
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
            <td><input type="checkbox" /> AC- Botiquín P.A</td>
        </tr>
       
    </tbody>
  </table>
    </div>
</div>
</>
  )
}


