import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Common/Header';
const Home = React.lazy(() => import('./Pages/Home/Home'));
const Help = React.lazy(() => import('./Pages/Help/Help'));

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Header />
        </>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
