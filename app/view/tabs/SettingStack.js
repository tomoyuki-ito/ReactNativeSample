import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SettingScreen from '../screens/SettingScreen';
import DetailScreen from '../screens/DetailScreen';

export const SettingStack = StackNavigator({
  Mypage: { screen: SettingScreen },
  Detail: { screen: DetailScreen },
});
