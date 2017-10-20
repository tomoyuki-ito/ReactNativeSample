import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

export const SearchStackNavigator = StackNavigator({
  Search: { screen: SearchScreen },
  Detail: { screen: DetailScreen },
});

export default class SearchStack extends Component {
  static navigationOptions = {
    tabBarLabel: '発見',
  };
  render() {
    return <SearchStackNavigator />;
  }
}
