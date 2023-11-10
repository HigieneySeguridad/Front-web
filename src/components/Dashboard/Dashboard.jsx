import { useEffect, useState } from 'react'
import { Chart, registerables } from 'chart.js'
import axios from "axios"
import "./dashboard.css"
import { Aside } from '../Aside'


Chart.register(...registerables);

export const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['Protecciones', 'Peligros', 'Riegos', 'Medidas'],
    datasets: [
      {
        label: 'Valores del mes 1',
        data: [],
        backgroundColor: 'rgba(0, 123, 255, 0.7)', // Color de fondo para las barras
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Valores del mes 2',
        data: [],
        backgroundColor: 'rgba(255, 0, 0, 0.7)', // Color de fondo para la barra de suma
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  });
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:3000/formularios/proteccion');
        const response2 = await axios.get('http://localhost:3000/formularios/peligros');
        const response3 = await axios.get('http://localhost:3000/formularios/riesgos');
        const response4 = await axios.get('http://localhost:3000/formularios/medidas');

        const newData1 = response1.data;
        const newData2 = response2.data;
        const newData3 = response3.data;
        const newData4 = response4.data;

        const sumaTrue1 = calcularSumaDeTrue(newData1);
        const sumaTrue2 = calcularSumaDeTrue(newData2);
        const sumaTrue3 = calcularSumaDeTrue(newData3);
        const sumaTrue4 = calcularSumaDeTrue(newData4);

        setChartData((prevChartData) => {
          const newDatasets = prevChartData.datasets.map((dataset, index) => ({
            ...dataset,
            data: index === 0 || index === 1 ? [sumaTrue1, sumaTrue2, sumaTrue3, sumaTrue4] : [newData1[index], newData2[index], newData3[index], newData4[index]],
          }));
          return { ...prevChartData, datasets: newDatasets };
        });
      
      } catch (error) {
        console.error('Error al obtener datos del servidor', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'bar', // Cambia el tipo de gráfico a 'bar'
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            boxPadding: 3,
          },
        },
      },
    });
  
    return () => {
      myChart.destroy();
    };

}, [chartData])

 
  const calcularSumaDeTrue = (datos) => {
    let suma = 0;
    datos.forEach((item) => {
      if (item.checkboxes) {
        Object.values(item.checkboxes).forEach((valor) => {
          if (valor === 'true') {
            suma++;
          }
        });
      }
    });
    return suma;
  };
   
  return (
<div className="container-fluid">
  <div className="row">
   <Aside/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 style={{color: 'black'}}>Gráficos</h2>
      </div>

      <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

      <h2>Section title</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>


          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>
  )
}

