import { View, Text, Button } from 'react-native';
import React from 'react';
import useCounterStore from '../zustand/store';

const Two = () => {
  const { count, increment, decrement } = useCounterStore();
  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title="Increment" onPress={increment}></Button>
      <Button title="Decrement" onPress={decrement}></Button>
    </View>
  );
};

export default Two;
