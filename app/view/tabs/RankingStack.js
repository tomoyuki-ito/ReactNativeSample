import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RankingScreen from '../screens/RankingScreen';
import DetailScreen from '../screens/DetailScreen';

export const Navi = StackNavigator({
  Ranking: { screen: RankingScreen },
  Detail: { screen: DetailScreen },
});

export default class RankingStack extends Component {
  static navigationOptions = {
    tabBarLabel: '人気',
  };
  render() {
    return <Navi />;
  }
}
