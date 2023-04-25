import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../customHook/FetchData';
import { UserPerformanceFactory } from '../../factories/UserPerformanceFactory';

/**
 * React component given the structure HTML of the chart performance
 * @param {PropTypes} userId id of the user connected
 * @returns {React.ReactElement} PerformanceChart
 */
const PerformanceChart = ({ userId }) => {
  const url = '/mockedDatas/performance.json';

  const [data, isLoading, isError, error] = FetchData(
    url,
    1000,
    UserPerformanceFactory,
    'api'
  );

  if (isLoading) return <p>Données en cours de chargement</p>;

  if (isError)
    return (
      <div className="error-container">
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div className="performanceChart-container">
      <p>Performance Chart</p>
      <p>{userId}</p>
      <ul>
        {data.data.map((data, index) => (
          <li key={index}>
            kind: {data.kind} value: {data.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

PerformanceChart.propTypes = {
  userId: PropTypes.number,
};

export default PerformanceChart;
