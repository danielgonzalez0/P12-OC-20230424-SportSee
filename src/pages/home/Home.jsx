import React from 'react';
import FetchData from '../../components/customHook/FetchData';
import { UserInfosFactory } from '../../factories/UserInfosFactory';
import ActivityChart from '../../components/activityChart/ActivityChart';
import InfosCard from '../../components/infosCard/InfosCard';
import PerformanceChart from '../../components/performanceChart/PerformanceChart';
import TimeSessionsChart from '../../components/timeSessionsChart/TimeSessionsChart';
import TodayScoreChart from '../../components/todayScoreChart/TodayScoreChart';
import Header from '../../components/header/Header';

/**
 * React component given the structure HTML of the user home page
 * @returns {React.ReactElement} Home
 */
const Home = () => {
  const userId = 18;
  const url = '/mockedDatas/userInfos.json';

  const [data, isLoading, isError, error] = FetchData(
    url,
    1000,
    UserInfosFactory,
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
    <div>
      <Header />
      <h1>Bonjour {data.firstName}</h1>

      <main>
        <ActivityChart userId={userId} />
        <PerformanceChart userId={userId} />
        <TimeSessionsChart userId={userId} />
        <TodayScoreChart score={data.todayScore} />
      </main>
      <InfosCard
        calorie={data.calorieCount}
        protein={data.proteinCount}
        glucid={data.carbohydrateCount}
        lipid={data.lipidCount}
      />
    </div>
  );
};

export default Home;
