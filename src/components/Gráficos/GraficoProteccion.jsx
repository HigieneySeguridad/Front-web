import { Line } from 'react-chartjs-2';
import faker from 'faker'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const GraficoProteccion = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
    };
    
    const labels = ['Cabeza y Cuerpo', 'Ojos y Cara', 'Auditiva', 'Manos', 'Respiratoria', 'Pies'];
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Mes 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Mes 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    
  return (
    <div className='div-graficos'>
        <h4>Gráfico de Protecciones Corporales</h4>
       <Line options={options} data={data}/>
    </div>
  )
}

