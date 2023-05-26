import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "views/layout/private";

import PublicLayout from "views/layout/public";
import PrivateRoutes from "views/routes/private";
import PublicRoutes from "views/routes/public";

// import PublicLayout from "views/layout/public";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/app" element={<PrivateLayout />} >
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
