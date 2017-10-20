import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'ホーム'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>ホーム画面です</Text>
        <Button
          onPress={() => navigate('Detail')}
          title="詳細へ"
        />
      </View>
    );
  }
}
