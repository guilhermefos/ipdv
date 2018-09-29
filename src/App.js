import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';
import store from './store';

const App = () => {
  return routes ?
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                  render={props =>
                    React.createElement(route.component, {
                      ...props
                    })}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
    : null;
};

export default App;
