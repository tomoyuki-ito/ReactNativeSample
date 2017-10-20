import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DetailScreen extends Component {
  static navigationOptions = {
    title: '詳細',
  };
  render() {
    return (
      <View>
        <Text>詳細画面です</Text>
      </View>
    );
  }
}
