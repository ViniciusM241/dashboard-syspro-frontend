import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  borderWidth: 3,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
      position: 'bottom',
      align: 'center',
    },
    title: {
      display: false,
    },
  },
};

function ServicesPie ({ dataset, ...props }) {
  const data = {
    labels: dataset?.labels,
    datasets: [
      {
        label: 'Empresas',
        data: dataset?.data,
        backgroundColor: props.colors || ['#A8E10C', '#FFDB15', '#8A6FDF', '#151E3F', '#D36060' , '#87E752', '#F9AB55', '#5CC8FF', '#FEC9F1'],
      },
    ],
  };

  return <Pie options={options} data={data} width={200} height={200} />;
}

export default ServicesPie;
