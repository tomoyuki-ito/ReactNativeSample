import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MypageScreen extends Component {
  static navigationOptions = {
    title: 'マイページ'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>マイページ画面です</Text>
        <Button
          onPress={() => navigate('Detail')}
          title="詳細へ"
        />
      </View>
    );
  }
}
