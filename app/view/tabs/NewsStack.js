import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import NewsScreen from '../screens/NewsScreen';
import DetailScreen from '../screens/DetailScreen';

export const NewsStack = StackNavigator({
  News: { screen: NewsScreen },
  Detail: { screen: DetailScreen },
});
