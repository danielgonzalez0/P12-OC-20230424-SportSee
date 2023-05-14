import React, { useEffect, useState } from 'react';
import FetchData from '../../components/customHook/FetchData';
import UserInfosFactory from '../../factories/UserInfosFactory';
import Loader from '../../components/loader/Loader';
import { useParams } from 'react-router-dom';

/**
 * React component given general informations of the user
 * @returns {React.ReactElement} UserInfosDev
 */
const UserInfosDev = () => {
  const userId = useParams().id;
  const url = `http://localhost:3000/user/${userId}`;
  const [dataArray, setDataArray] = useState([]);

  const [data, isLoading, isError, error] = FetchData(
    url,
    1,
    UserInfosFactory,
    'api'
  );

  useEffect(() => {
    if (!isNaN(userId) && data) {
      const infos = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        todayScore: data.todayScore,
        calorieCount: data.calorieCount,
        proteinCount: data.proteinCount,
        carbohydrateCount: data.carbohydrateCount,
        lipidCount: data.lipidCount,
      };
      setDataArray(infos);
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

export default UserInfosDev;
