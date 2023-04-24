import React from 'react';
import FetchData from '../../components/customHook/FetchData';
import InfosCard from '../../components/InfosCard/InfosCard';
import { UserInfosFactory } from '../../factories/UserInfosFactory';

const Home = () => {
  const url = '/mockedDatas/userInfos.json';

  const [data, isLoading, isError, error] = FetchData(url, 1000, UserInfosFactory, 'apikkk');

  if (isLoading) return <p>Données en cours de chargement</p>;

  if (isError)
    return (
      <div className="error-container">
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div>
      <h1>Bonjour {data.firstName}</h1>
      <InfosCard userId={data.id} />
    </div>
  );
};

export default Home;
