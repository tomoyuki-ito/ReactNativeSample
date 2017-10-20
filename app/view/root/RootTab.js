import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { HomeStack } from '../tabs/HomeStack';
import { RankingStack } from '../tabs/RankingStack';
import { SearchStack } from '../tabs/SearchStack';
import { NewsStack } from '../tabs/NewsStack';
import { MypageStack } from '../tabs/MypageStack';
import { SettingStack } from '../tabs/SettingStack';

const Tab = TabNavigator({
  Home: { screen: HomeStack },
  Ranking: { screen: RankingStack },
  Search: { screen: SearchStack },
  News: { screen: NewsStack },
  Mypage: { screen: MypageStack },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#47be5c',
  }
});

const Modal = StackNavigator({
  RootTab: { screen: Tab },
  SettingStack: { screen: SettingStack },
}, {
  headerMode: 'none',
  mode: 'modal'
});

export default class RootTab extends Component {
  render() {
    return <Modal />;
  }
}
