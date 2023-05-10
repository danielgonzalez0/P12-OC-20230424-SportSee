import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserPerformanceFactory from '../../factories/UserPerformanceFactory';
import FetchData from '../../components/customHook/FetchData';
import Loader from '../../components/loader/Loader';

/**
 * React component given user performance data
 * @returns {React.ReactElement} UserInfosDev
 */
const UserPerformanceDev = () => {
  const userId = useParams().id;
  const url = `http://localhost:3000/user/${userId}/performance`;
  const [dataArray, setDataArray] = useState([]);

  const [data, isLoading, isError, error] = FetchData(
    url,
    1,
    UserPerformanceFactory,
    'api'
  );

  useEffect(() => {
    if (!isNaN(userId) && data) {
      setDataArray(data.data);
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
      <h1>User performance page</h1>
      <p>user id : {data.id}</p>
      <ul>
        {dataArray.map((session, index) => (
          <li key={index}>
            {session.kind} : {session.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPerformanceDev;
