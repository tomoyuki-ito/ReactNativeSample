import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Navi = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

export default class HomeStack extends Component {
  static navigationOptions = {
    tabBarLabel: 'ホーム',
  };
  render() {
    return <Navi />;
  }
}
