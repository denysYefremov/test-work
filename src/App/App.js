// @flow
import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from 'components/GlobalStyles';
import Workspace from 'components/Workspace';
import Tabs from 'components/Tabs';
import Dashboard from 'features/Dashboard';
import Entertainment from 'features/Entertaiment';
import store from './store';

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Provider store={store}>
      <Workspace>
        <Tabs>
          <Tabs.Tab label="Dashboard">
            <Dashboard />
          </Tabs.Tab>
          <Tabs.Tab label="Entertainment Select">
            <Entertainment />
          </Tabs.Tab>
          <Tabs.Tab label="Entertainment View" disabled>
            <Entertainment />
          </Tabs.Tab>
        </Tabs>
      </Workspace>
    </Provider>
  </React.Fragment>
);

export default App;
