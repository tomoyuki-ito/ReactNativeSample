import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class SettingScreen extends Component {
  static navigationOptions = {
    title: '設定'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>設定画面です</Text>
        <Button
          onPress={() => navigate('Detail')}
          title="詳細へ"
        />
        <Button
          onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
          title="閉じる"
        />
      </View>
    );
  }
}
