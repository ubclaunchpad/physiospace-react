import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Exercise from './containers/Exercise/Exercise';
import Workout from './containers/Workout/Workout';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/exercise/:workoutType" component={Exercise} />
            <Route path="/workout/:workoutType" component={Workout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
