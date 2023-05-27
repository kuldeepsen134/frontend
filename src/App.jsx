import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PrivateLayout from "views/layout/private";
import PublicLayout from "views/layout/public";
import PrivateRoutes from "views/routes/private";
import PublicRoutes from "views/routes/public";

function App() {
  const { isUserLoggedIn } = useSelector((state) => state.session)
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/app" element={isUserLoggedIn ? <PrivateLayout /> : <Navigate to='/login' />} >
            <Route index element={<Navigate to={`/app/deshboard`} />} />
            {PrivateRoutes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })}
            <Route path="/app/*" element={<Navigate to={`/login`} />} />
          </Route>

          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Navigate to={`/login`} />} />
            {PublicRoutes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })}
            <Route path="/*" element={<Navigate to={`/login`} />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;
