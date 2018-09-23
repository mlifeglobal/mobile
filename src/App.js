import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Landing from './screens/Landing';
import Home from './screens/Home';

const stackScreens = {
  Landing: { screen: Landing },
  Home: { screen: Home }
};

const stackerOptions = {
  index: 0,
  headerMode: 'none'
};

const StackerWithLanding = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: 'Landing'
});

/* eslint-disable no-unused-vars */
const StackerWithHome = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: 'Home'
});

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return <StackerWithLanding />;
  }
}

export default App;
