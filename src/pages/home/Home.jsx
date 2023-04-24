import React from 'react';
import FetchData from '../../components/customHook/FetchData';

const Home = () => {
  const url = '/mockedDatas/userInfos.json';
  const [data, isLoading, isError, error] = FetchData(url, 1000);

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
      <h1>Bonjour {data.userInfos.firstName}</h1>
    </div>
  );
};

export default Home;
