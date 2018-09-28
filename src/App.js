import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './store';

const App = ({ routes }) => {
  return routes ?
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
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

App.propTypes = {
  routes: PropTypes.array.isRequired
};

export default App;
