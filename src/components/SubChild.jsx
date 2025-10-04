import { View, Text, Button } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { CounterContext } from './Parent';

const SubChild = () => {
  const { count, incrementCount } = useContext(CounterContext);
  return (
    <View>
      <Text>Counter : {count}</Text>
      <Button title="Counter" onPress={incrementCount} />
    </View>
  );
};

export default SubChild;
