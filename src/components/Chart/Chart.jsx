import { Height } from '@material-ui/icons';
import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
// import { Chart } from 'react-chartjs-2';
import { Bar, Line } from 'react-chartjs-2';

const Chart = ({ barChart, label, Data, chartHeading }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: chartHeading,

        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,

        data: Data,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: {
        title: {
          display: true,
          text: 'Calendar month',
          font: {
            size: 12,
          },
          color: '#000',
        },
      },
      yAxes: {
        title: {
          display: true,
          text: 'Noise in dbs',
          font: {
            size: 12,
          },
          color: '#000',
        },
      },
    },
  };
  return (
    <div
      style={{
        height: '50vh',
        width: '48vw',
        // display: 'inline-flex',
        // marginBottom: '10px',
        // marginRight: '5px',
        margin: 30,
      }}
    >
      {barChart ? (
        <Bar
          style={{
            textAlign: 'center',
            backgroundColor: 'rgb(219, 219, 233)',
            borderRadius: '10px',
            border: '2px,solid, black',
            paddingBottom: '10px',
            marginLeft: '15px',
            marginBottom: '20px',
          }}
          data={data}
          options={options}
        />
      ) : (
        <Line
          style={{
            textAlign: 'center',
            backgroundColor: 'rgb(219, 219, 233)',
            borderRadius: '10px',
            border: '2px,solid, black',
            paddingBottom: '10px',
            marginLeft: '15px',
            marginBottom: '20px',
          }}
          data={data}
          options={options}
        />
      )}
    </div>
  );
};
export default Chart;
