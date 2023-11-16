import { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import "./dashboard.css"
import { Aside } from '../Aside'


Chart.register(...registerables);

export const Dashboard = () => {
  
  const data = {
    labels: [
      'Denegados',
      'Aceptados'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [30, 15],
      backgroundColor: [
        'rgb(220, 20, 60)',
        'rgb(0, 255, 0)'
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

})


   
  return (
<div className="container">
  <div className="row">
   <Aside/>
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

      <h3>Permisos de Trabajo rechazados:</h3>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">N° FORM</th>
              <th scope="col">Encargado</th>
              <th scope="col">Sector</th>
              <th scope="col" colSpan={2}>Comentario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
        
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              
            </tr>
            


          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>
  )
}

