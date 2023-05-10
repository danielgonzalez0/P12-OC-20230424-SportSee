import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../../components/customHook/FetchData';
import UserActivitiesFactory from '../../factories/UserActivitiesFactory';
import Loader from '../../components/loader/Loader';

/**
 * React component given informations of user activity
 * @returns {React.ReactElement} User
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
      setDataArray(data.sessions);
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
    <div>
      <h1>User Activity page</h1>
      <p>user id: {userId}</p>
      <ul>
        {dataArray.map((session, index) => (
          <li key={index}>
            date : {session.day} - {session.calories} cal - {session.kilogram}{' '}
            kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivityInfos;
