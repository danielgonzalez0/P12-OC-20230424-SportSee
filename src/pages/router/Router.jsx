import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import UserInfosDev from '../user_infos/UserInfosDev';
import UserActivityInfos from '../user_activity/UserActivityInfos';
import UserSessionsDev from '../user_sessions/UserSessionsDev';
import UserPerformanceDev from '../user_performance/UserPerformanceDev';

/**
 * React component given the application routes structure
 * @returns {React.ReactElement} Router
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserInfosDev />} />
        <Route path="/user/:id/activity" element={<UserActivityInfos />} />
        <Route path="/user/:id/performance" element={<UserPerformanceDev />} />
        <Route
          path="/user/:id/average-sessions"
          element={<UserSessionsDev />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
