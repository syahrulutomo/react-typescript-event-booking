import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoutes from "./components/PublicRoutes";
import HomeView from './../view/public/Home/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes component={HomeView} exact path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
