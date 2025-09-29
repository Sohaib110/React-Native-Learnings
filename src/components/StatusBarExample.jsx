import { View, Text, StatusBar } from 'react-native';
import React from 'react';

const StatusBarExample = () => {
  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#61dafb'}
        translucent={true}
      />
      <Text>StatusBarExample</Text>
    </View>
  );
};

export default StatusBarExample;
