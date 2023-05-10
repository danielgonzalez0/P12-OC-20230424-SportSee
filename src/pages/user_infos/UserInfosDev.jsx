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
      setDataArray(data);
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
      <h1>User Infos page</h1>
      <ul>
        <li>user id: {dataArray.id}</li>
        <li>prénom: {dataArray.firstName}</li>
        <li>nom : {dataArray.lastName}</li>
        <li>age: {dataArray.age}</li>
        <li>calories: {dataArray.calorieCount}kCal</li>
        <li>protéines: {dataArray.proteinCount}g</li>
        <li>glucides: {dataArray.carbohydrateCount}g</li>
        <li>lipides: {dataArray.lipidCount}g</li>
        <li>objectif du jour: {dataArray.todayScore * 100}%</li>
      </ul>
    </div>
  );
};

export default UserInfosDev;
