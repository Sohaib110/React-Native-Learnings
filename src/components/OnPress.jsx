import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const OnPress = () => {
  const getName = () => {
    alert('Hello Muhammad Sohaib');
  };
  return (
    <View>
      <Text>OnPress</Text>
      <Button title="Click Me" onPress={getName} />
    </View>
  );
};
export default OnPress;
