import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'お知らせ'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>お知らせ画面です</Text>
        <Button
          onPress={() => navigate('Detail')}
          title="詳細へ"
        />
      </View>
    );
  }
}
