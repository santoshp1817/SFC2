import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import './Dashboard.css';

const AnalyticsChart = () => {
    const [showBar, setShowBar] = useState(true);

    const [barChart, setBarChart] = useState(true);

    const [chart, setChart] = useState({
        label: [
            '1 ',
            '2',
            '3',
            '4',
            '1 ',
            '2',
            '3',
            '4',
            '1 ',
            '2',
            '3',
            '4',
            '1 ',
            '2',
            '3',
            '4',
            '1 ',
            '2',
            '3',
            '4',
            '1 ',
            '2',
            '3',
            '4',
        ],
        data: [
            65, 45, 123, 42, 65, 45, 123, 42, 65, 45, 123, 42, 65, 45, 123, 42, 65,
            45, 123, 42, 65, 45, 123, 42,
        ],
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
            <div className='chartHeading2' style={{ margin: 0 }}>
                <h2> Bar/Line Chart</h2>
                <div>
                    <button onClick={handleBarGraph} style={{ cursor: 'pointer' }}>
                        <BarChartIcon />
                    </button>
                    <button onClick={handleShowLineGraph} style={{ cursor: 'pointer' }}>
                        <ShowChartIcon />
                    </button>
                </div>
            </div>

            {showBar ? (
                <Chart
                    barChart={barChart}
                    label={chart.label}
                    Data={chart.data}
                    chartHeading='Noise chart in decibles'
                />
            ) : null}
        </>
    );
};
export default AnalyticsChart;