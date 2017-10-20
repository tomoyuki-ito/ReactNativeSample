import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: '発見'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>発見画面です</Text>
        <Button
          onPress={() => navigate('Detail')}
          title="詳細へ"
        />
      </View>
    );
  }
}
