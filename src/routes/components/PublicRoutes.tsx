import * as React from 'react';
import { Route, RouteComponentProps, RouteProps, Redirect } from 'react-router-dom';

const PublicRoute: React.SFC<RouteProps> =
  ({ component: Component, ...rest }) => {

    if (!Component) {
      return null;
    }
    return (
      <Route
        {...rest}
        render={(props: RouteComponentProps<{}>) => {
          return <Component {...props} />
        }}
      />
    );
  };

export default PublicRoute;