import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      display: false,
    },
    title: {
      display: false,
    },
  },
  aspectRatio: 1,
  maintainAspectRatio: false,
};

function CountAllCompanies ({ dataset, ...props }) {
  const data = {
    labels: dataset?.labels,
    datasets: [
      {
        label: 'Empresas',
        data: dataset?.data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default CountAllCompanies;
