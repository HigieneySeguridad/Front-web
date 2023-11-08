import { useEffect, useState } from 'react'
import { Chart } from 'chart.js'
import axios from "axios"
import "./dashboard.css"
import { Aside } from '../Aside'

export const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['Protecciones', 'Peligros', 'Riegos', 'Medidas'],
    datasets: [
      {
        label: 'Línea 1',
        data: [],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      },
      {
        label: 'Suma de "true"',
        data: [], // Aquí guardaremos la suma de "true"
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: 'red', // Color para la línea de la suma
        borderWidth: 4,
        pointBackgroundColor: 'red'
      }
    ]
  });

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos del servidor
    axios.get('http://localhost:3000/formularios/proteccion') // Asegúrate de que la ruta coincida con la definida en tu servidor
      .then((response) => {
        const newData = response.data; // Los datos obtenidos del servidor

        // Calcula la suma de "true" y actualiza el estado del componente
        const sumaTrue = calcularSumaDeTrue(newData);
        setChartData((prevChartData) => {
          // Actualiza los datos en los conjuntos de datos, incluyendo la suma de "true"
          const newDatasets = prevChartData.datasets.map((dataset, index) => ({
            ...dataset,
            data: index === 1 ? [sumaTrue] : newData[index], // Actualiza el conjunto de datos de la suma
          }));
          return { ...prevChartData, datasets: newDatasets };
        });
      })
      .catch((error) => {
        console.error('Error al obtener datos del servidor', error);
      });
  }, []);

  useEffect(() => {
    // Inicializa o actualiza el gráfico cuando cambien los datos
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            boxPadding: 3
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  // Función para calcular la suma de "true" en los valores de los checkboxes
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

          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>
  )
}

