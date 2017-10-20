import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import NewsScreen from '../screens/NewsScreen';
import DetailScreen from '../screens/DetailScreen';

export const Navi = StackNavigator({
  News: { screen: NewsScreen },
  Detail: { screen: DetailScreen },
});

export default class NewsStack extends Component {
  static navigationOptions = {
    tabBarLabel: 'お知らせ',
  };
  render() {
    return <Navi />;
  }
}
