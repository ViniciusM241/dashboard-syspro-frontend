import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  borderWidth: 0,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
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
        backgroundColor: ['#A8E10C', '#FFDB15', '#FF5765', '#8A6FDF', '#151E3F', '#D36060' , '#87E752', '#F9AB55', '#5CC8FF'],
      },
    ],
  };

  return <Pie options={options} data={data} />;
}

export default CountNewCompanies;
