import React from 'react';
import PropTypes from 'prop-types';
import FetchData from '../customHook/FetchData';
import { UserSessionsFactory } from '../../factories/UserSessionsFactory';

/**
 * React component given the structure HTML of the chart with sessions informations
 * @param {PropTypes} userId id of the user connected
 * @returns {React.ReactElement} TimeSessionsChart
 */
const TimeSessionsChart = ({ userId }) => {
  const url = '/mockedDatas/sessionsDuration.json';

  const [data, isLoading, isError, error] = FetchData(
    url,
    1000,
    UserSessionsFactory,
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
    <div className="timeSessionsChart-container">
      <p>Sessions infos Chart</p>
      <p>{userId}</p>
      <ul>
        {data.sessions.map((session, index) => (
          <li key={index}>
            day: {session.day} duration: {session.sessionLength} min
          </li>
        ))}
      </ul>
    </div>
  );
};

TimeSessionsChart.propTypes = {
  userId: PropTypes.number,
};

export default TimeSessionsChart;
