import { View, Text } from 'react-native';
import React from 'react';
import FirstChild from './FirstChild';
import { useState } from 'react';
import { createContext } from 'react';


export const CounterContext = createContext();
const Parent = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <CounterContext.Provider value={{ count, incrementCount }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FirstChild />
      </View>
    </CounterContext.Provider>
  );
};

export default Parent;
