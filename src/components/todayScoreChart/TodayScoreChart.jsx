import React, { useEffect, useState } from 'react';
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import variables from '../../styles/_settings.scss';
import Loader from '../loader/Loader';

/**
 * React component given the structure HTML of the chart performance
 * @param {PropTypes} score user score of achievement for the day
 * @returns {React.ReactElement} TodayScoreChart
 */
const TodayScoreChart = ({ score }) => {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * customize the legend of the graph
   * @param {string} payload The source data of the content to be displayed in the legend
   * @returns customized legend components
   */
  function CustomLegend(payload) {
    return (
      <div className="todayScore">
        <p>{payload.payload[0].payload.uv}%</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    );
  }

  useEffect(() => {
    if (!isNaN(score)) {
      let chartData = [
        {
          uv: score * 100,
          fill: `${variables.red1}`,
        },
        {
          uv: 100,
          fill: `${variables.white2}`,
        },
      ];
      setDataArray(chartData);
      setTimeout(() => setIsLoading(false), 2500);
    }
  }, [score]);

  //JSX
  if (isLoading)
    return (
      <div className="loading-graph">
        <Loader />
        <p>Chargement</p>
      </div>
    );

  if (!isLoading)
    return (
      <div className="todayScoreChart-container">
        <h4>Score</h4>
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius={75}
            outerRadius={95}
            startAngle={90}
            endAngle={470}
            data={dataArray}
          >
            <RadialBar dataKey="uv" cornerRadius={100} />
            <Legend content={<CustomLegend />} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
};

TodayScoreChart.propTypes = {
  score: PropTypes.number,
};

export default TodayScoreChart;
