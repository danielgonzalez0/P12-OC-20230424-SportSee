import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchData from '../customHook/FetchData';
import UserPerformanceFactory  from '../../factories/UserPerformanceFactory';
import variables from '../../styles/_settings.scss';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import Loader from '../loader/Loader';

/**
 * React component given the structure HTML of the chart performance
 * @param {PropTypes} userId id of the user connected
 * @returns {React.ReactElement} PerformanceChart
 */
const PerformanceChart = ({ userId }) => {
  const [dataArray, setDataArray] = useState([]);
  // const url = '/mockedDatas/performance.json';
  const url = `http://localhost:3000/user/${userId}/performance`;

  const [data, isLoading, isError, error] = FetchData(
    url,
    3000,
    UserPerformanceFactory,
    'api'
  );

  useEffect(() => {
    if (!isNaN(userId) && data) {
      const sortList = [
        'Intensité',
        'Vitesse',
        'Force',
        'Endurance',
        'Energie',
        'Cardio',
      ];
      const sortedPerf = data.data.sort((a, b) => {
        return sortList.indexOf(a.kind) - sortList.indexOf(b.kind);
      });
      setDataArray(sortedPerf);
    }
  }, [userId, data]);

  if (isLoading)
    return (
      <div className="loading-graph">
        <Loader />
        <p>Chargement</p>
      </div>
    );

  if (isError)
    return (
      <div className="error-container">
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div className="performanceChart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" data={dataArray} outerRadius={'65%'}>
          <PolarGrid stroke={variables.white1} radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke={variables.white1}
            fontSize={12}
            fontFamily={variables.font500}
            tickLine={false}
          />
          <Radar dataKey="value" fill={variables.red1} fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceChart.propTypes = {
  userId: PropTypes.number,
};

export default PerformanceChart;
