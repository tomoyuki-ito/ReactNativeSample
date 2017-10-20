import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeStack from '../tabs/HomeStack';
import RankingStack from '../tabs/RankingStack';
import SearchStack from '../tabs/SearchStack';
import NewsStack from '../tabs/NewsStack';
import MypageStack from '../tabs/MypageStack';

const Navi = TabNavigator({
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

export default class RootTab extends Component {
  render() {
    return <Navi />;
  }
}
