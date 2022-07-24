import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Common/Header';
import Help from './Pages/Help/Help';
import Home from './Pages/Home/Home';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
