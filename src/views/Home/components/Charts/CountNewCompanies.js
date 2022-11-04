import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
    },
    title: {
      display: false,
    },
  },
};

function CountNewCompanies ({ dataset, ...props }) {
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

  return <Pie options={options} data={data} />;
}

export default CountNewCompanies;
