import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from '../user_activity/UserActivityInfos';
import Home from '../home/Home';

/**
 * React component given the application routes structure
 * @returns {React.ReactElement} Router
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id/activity" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
