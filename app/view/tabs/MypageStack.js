import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MypageScreen from '../screens/MypageScreen';
import DetailScreen from '../screens/DetailScreen';

const Navi = StackNavigator({
  Mypage: { screen: MypageScreen },
  Detail: { screen: DetailScreen },
});

export default class MypageStack extends Component {
  static navigationOptions = {
    tabBarLabel: 'マイページ',
  };
  render() {
    return <Navi />;
  }
}
