import { View, Text } from 'react-native';
import React from 'react';

const Child = props => {
  let count = props.data;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{count}</Text>
    </View>
  );
};

export default Child;
