import React from 'react';
import {Route, Switch, Routes } from 'react-router-dom';

import PageNotFound from "../pages/PageNotFound";
import Main from '../pages/Main';

function CustomRoutes() {

  return (
      <Routes>
        <Route exact path="/"element={<Main />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
  )
}

export default CustomRoutes;