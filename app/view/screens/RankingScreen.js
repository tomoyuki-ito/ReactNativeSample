import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RankingScreen extends React.Component {
  static navigationOptions = {
    title: '人気'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>人気画面です</Text>
        <Button
          onPress={() => navigate('Detail')}
          title="詳細へ"
        />
      </View>
    );
  }
}
