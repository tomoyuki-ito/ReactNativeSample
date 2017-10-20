import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RankingScreen from '../screens/RankingScreen';
import DetailScreen from '../screens/DetailScreen';

export const RankingStack = StackNavigator({
  Ranking: { screen: RankingScreen },
  Detail: { screen: DetailScreen },
});
