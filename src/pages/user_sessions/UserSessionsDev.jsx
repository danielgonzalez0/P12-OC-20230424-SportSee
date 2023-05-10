import React, { useEffect, useState } from 'react';
import FetchData from '../../components/customHook/FetchData';
import { useParams } from 'react-router-dom';
import UserSessionsFactory from '../../factories/UserSessionsFactory';
import Loader from '../../components/loader/Loader';

/**
 * React component given informations of user average sessions
 * @returns {React.ReactElement} UserSessionsDev
 */
const UserSessionsDev = () => {
  const userId = useParams().id;
  const url = `http://localhost:3000/user/${userId}/average-sessions`;

  const [dataArray, setDataArray] = useState([]);

  const [data, isLoading, isError, error] = FetchData(
    url,
    1,
    UserSessionsFactory,
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
      <h1>User average sessions infos page</h1>
      <p>user id : {data.id}</p>
      <ul>
        {dataArray.map((session, index) => (
          <li key={index}>
            jour : {session.day} - durée session : {session.sessionLength}min
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSessionsDev;
