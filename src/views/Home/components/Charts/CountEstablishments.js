import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
    },
    datalabels: {
      backgroundColor: function(context) {
        return context.dataset.backgroundColor;
      },
      borderRadius: 4,
      color: 'white',
      font: {
        weight: 'bold'
      },
      formatter: Math.round,
      padding: 6,
      align: 'end',
      anchor: 'end',
    },
  },
};

function CountEstablishments ({ dataset, ...props }) {
  const data = {
    labels: dataset?.labels,
    datasets: [
      {
        label: 'ECs',
        data: dataset?.data,
        borderColor: '#5CC8FF',
        backgroundColor: '#5CC8FF',
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default CountEstablishments;
