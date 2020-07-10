import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoutes from "./components/PublicRoutes";
import PrivateRoutes from "./components/PrivateRoutes";
import HomeView from '../view/private/Home/index';
import HomePublicView from '../view/public/Home/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoutes component={HomeView} exact path="/home" />
        <PublicRoutes component={HomePublicView} exact path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
