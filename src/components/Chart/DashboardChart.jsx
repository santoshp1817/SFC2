import React, { useEffect, useState } from 'react';
import Chart2 from './Chart2';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import './Dashboard.css';
import { lightBlue } from '@material-ui/core/colors';

const DashboardChart = ({ dashboardLabel, dashboardData }) => {
  const [showBar, setShowBar] = useState(true);

  const [barChart, setBarChart] = useState(true);

  const [chart, setChart] = useState({
    label: dashboardLabel,
    data: dashboardData,
  });

  const handleBarGraph = () => {
    setShowBar(true);

    setBarChart(true);
  };

  const handleShowLineGraph = () => {
    setBarChart(false);
  };

  return (
    <>
      <div className='chartHeading' style={{ backgroundColor: 'lightBlue' }}>
        <h2> Bar/Line Chart</h2>

        <button onClick={handleBarGraph} style={{ cursor: 'pointer' }}>
          <BarChartIcon />
        </button>
        <button onClick={handleShowLineGraph} style={{ cursor: 'pointer' }}>
          <ShowChartIcon />
        </button>
      </div>

      {showBar ? (
        <Chart2
          barChart={barChart}
          label={chart.label}
          Data={chart.data}
          chartHeading='Noise chart in decibles'
        />
      ) : null}
    </>
  );
};
export default DashboardChart;
