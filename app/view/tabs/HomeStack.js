import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

export const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});
