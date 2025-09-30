import { View, Text, Button } from 'react-native';
import React from 'react';
import GET_API from './src/components/GET_API';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <GET_API />
    </View>
  );
};

export default App;
