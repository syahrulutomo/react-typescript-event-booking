import * as React from 'react';
import { Route, RouteComponentProps, RouteProps, Redirect } from 'react-router-dom';

const PrivateRoute: React.SFC<RouteProps> =
  ({ component: Component, ...rest }) => {
    const isLoggedIn = true;

    if (!Component) {
      return null;
    }
    return (
      <Route
        {...rest}
        render={(props: RouteComponentProps<{}>) => {
          return isLoggedIn ? <Component {...props} /> : <Redirect to="login" />
        }}
      />
    );
  };

export default PrivateRoute;