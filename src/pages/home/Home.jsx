import React from 'react';
import FetchData from '../../components/customHook/FetchData';
import UserInfosFactory from '../../factories/UserInfosFactory';
import ActivityChart from '../../components/activityChart/ActivityChart';
import InfosCard from '../../components/infosCard/InfosCard';
import PerformanceChart from '../../components/performanceChart/PerformanceChart';
import TimeSessionsChart from '../../components/timeSessionsChart/TimeSessionsChart';
import TodayScoreChart from '../../components/todayScoreChart/TodayScoreChart';
import Header from '../../components/header/Header';
import VerticalNavBar from '../../components/vertical_navbar/VerticalNavBar';
import Loader from '../../components/loader/Loader';

/**
 * React component given the structure HTML of the user home page
 * @returns {React.ReactElement} Home
 */
const Home = () => {
  const userId = 18;
  // const url = '/mockedDatas/userInfos.json';
  const url = `http://localhost:3000/user/${userId}`;

  const [data, isLoading, isError, error] = FetchData(
    url,
    2000,
    UserInfosFactory,
    'api'
  );

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
    <>
      <Header />
      <VerticalNavBar />
      <div className="home-container">
        <div className="title-container">
          <h1>
            Bonjour <span>{data.firstName}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
        </div>
        <div className="main-container">
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
      </div>
    </>
  );
};

export default Home;
