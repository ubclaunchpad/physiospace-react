import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Exercise from './containers/Exercise/Exercise';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/exercise" exact component={Exercise} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
