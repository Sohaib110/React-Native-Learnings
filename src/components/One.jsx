import { View, Text } from 'react-native';
import React from 'react';
import Two from './Two';

const One = () => {
  return (
    <View>
      <Text>One</Text>
      <Two />
    </View>
  );
};

export default One;
