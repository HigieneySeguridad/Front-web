import { useEffect, useState } from 'react'
import { Chart, registerables } from 'chart.js'
import "./dashboard.css"
import axios from 'axios'


Chart.register(...registerables);

export const Dashboard = () => {
  const [formularios, setFormularios] = useState([]);
  const [formulariosCounts, setFormulariosCounts] = useState({
    aceptados: 0,
    denegados: 0,
    pendientes: 0,
  });
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/formularios');
      if (response.status === 200) {
        setFormularios(response.data); 
        const formulariosData = response.data;
        setFormulariosCounts({
          aceptados: formulariosData.filter(formulario => formulario.estado === 'Aceptado').length,
          denegados: formulariosData.filter(formulario => formulario.estado === 'Denegado').length,
          pendientes: formulariosData.filter(formulario => formulario.estado === 'Pendiente').length,
        });
      }
    } catch (error) {
      console.error('Error al obtener formularios', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

/*  const formulariosAceptados = formularios.filter(formulario => formulario.estado === 'Aceptado');
    const formulariosDenegados = formularios.filter(formulario => formulario.estado === 'Denegado');
    const formulariosPendientes = formularios.filter(formulario => formulario.estado === 'Pendiente'); */

    const data = {
      labels: ['Denegados', 'Aceptados', 'Pendientes'],
      datasets: [{
        label: 'Estados de Formularios',
        data: [formulariosCounts.denegados, formulariosCounts.aceptados, formulariosCounts.pendientes],
        backgroundColor: [
          'rgb(220, 20, 60)',  // Color para Denegados
          'rgb(0, 255, 0)',    // Color para Aceptados
          'rgb(255, 165, 0)',  // Color para Pendientes (ajusta según tus preferencias)
        ],
        hoverOffset: 3
      }]
    };

  useEffect(() => {
    const ctx = document.getElementById('myChart');
    const ctx2 = document.getElementById('myChart2');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
    })
    
    const myChart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: data,
    })

    return () => {
      myChart.destroy();
      myChart2.destroy();
    };

}, [formulariosCounts])


   
  return (
<div className="container">
  <div className="row">
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-9">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 style={{color: 'black'}}>Formularios Enviados</h2>
      </div>

      <div className='col-lg-9' id='contenedorChart'>

          <div className='col-lg-6'>
               <canvas id="myChart"></canvas>
          </div>

          <div className='col-lg-4' style={{marginLeft: 200}}>
              <canvas id="myChart2"></canvas>
          </div>
          
      </div>

      <h3>Permisos de Trabajo:</h3>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">N° FORM</th>
              <th scope="col">Encargado</th>
              <th scope="col">Empresa</th>
              <th scope="col">Permiso de Trabajo</th>
            </tr>
          </thead>
          <tbody>
            {formularios.map(formulario => (
              <tr key={formulario.id}>
                <td className='panel'>{formulario._id}</td>
                <td className='panel'>{formulario.username}</td>
                <td className='panel'>{formulario.empresa}</td>
                <td className='panel'>{formulario.permisoTrabajo}</td>
              </tr>
            ))}
    
        </tbody>

        </table>
      </div>
    </main>
  </div>
</div>
  )
}

