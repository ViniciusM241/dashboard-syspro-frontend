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
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 0,
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
    datalabels: {
      color: 'black',
      font: {
        weight: 'bold'
      },
      formatter: Math.round,
      anchor: "end",
      offset: -35,
      align: "start",
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
        backgroundColor: ['#A8E10C', '#FFDB15', '#FF5765', '#8A6FDF', '#151E3F', '#D36060' , '#87E752', '#F9AB55', '#5CC8FF'],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default CountAllCompanies;
