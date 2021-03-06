import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

export const SearchStack = StackNavigator({
  Search: { screen: SearchScreen },
  Detail: { screen: DetailScreen },
});
