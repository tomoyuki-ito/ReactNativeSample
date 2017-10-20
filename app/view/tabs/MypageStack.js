import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MypageScreen from '../screens/MypageScreen';
import DetailScreen from '../screens/DetailScreen';

export const MypageStack = StackNavigator({
  Mypage: { screen: MypageScreen },
  Detail: { screen: DetailScreen },
});
