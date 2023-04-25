import React from 'react';
import PropTypes from 'prop-types';
import { UserActivitiesFactory } from '../../factories/UserActivitiesFactory';
import FetchData from '../customHook/FetchData';

/**
 * React component given the structure HTML of the chart activity
 * @param {PropTypes} userId id of the user connected
 * @returns {React.ReactElement} ActivityChart
 */
const ActivityChart = ({ userId }) => {
  const url = '/mockedDatas/activity.json';

  const [data, isLoading, isError, error] = FetchData(
    url,
    1000,
    UserActivitiesFactory,
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
    <div className="activityChart-container">
      <p>Chart Activity</p>
      <p>{userId}</p>
      <ul>
        {data.sessions.map((session, index) => (
          <li key={index}>
            day: {session.day} cal: {session.calories} kg: {session.kilogram}
          </li>
        ))}
      </ul>
    </div>
  );
};

ActivityChart.propTypes = {
  userId: PropTypes.number,
};

export default ActivityChart;
