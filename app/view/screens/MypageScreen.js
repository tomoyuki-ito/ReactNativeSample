import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MypageScreen extends Component {
  static navigationOptions = {
    title: 'マイページ',
    headerRight: <Button title="設定"/>
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
        <Button
          onPress={() => navigate('SettingStack')}
          title="設定へ"
        />
      </View>
    );
  }
}
