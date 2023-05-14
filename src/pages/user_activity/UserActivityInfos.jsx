import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../../components/customHook/FetchData';
import UserActivitiesFactory from '../../factories/UserActivitiesFactory';
import Loader from '../../components/loader/Loader';

/**
 * React component given informations of user activity
 * @returns {React.ReactElement} UserActivityInfos
 */
const UserActivityInfos = () => {
  const userId = useParams().id;
  const url = `http://localhost:3000/user/${userId}/activity`;
  const [dataArray, setDataArray] = useState([]);

  const [data, isLoading, isError, error] = FetchData(
    url,
    1,
    UserActivitiesFactory,
    'api'
  );

  useEffect(() => {
    if (!isNaN(userId) && data) {
      const activity = {
        id: data.id,
        sessions: data.sessions.map((session) => {
          return {
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
          };
        }),
      };
      setDataArray(activity);
    }
  }, [userId, data]);

  if (isLoading)
    return (
      <div className="loading">
        <Loader />
        <p>Chargement</p>
      </div>
    );

  if (isError)
    return (
      <div className="home-error-container">
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div className="json">
      <pre>
      {JSON.stringify(dataArray, null, 2)}
      </pre>
    </div>
  );
};

export default UserActivityInfos;
