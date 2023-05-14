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
    <div className="json">
      <pre>{JSON.stringify(dataArray, null, 2)}</pre>
    </div>
  );
};

export default UserSessionsDev;
