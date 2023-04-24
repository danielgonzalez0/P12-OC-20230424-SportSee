import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from '../user/User';
import Home from '../home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
