import { View, Text, Button } from 'react-native';
import React from 'react';
import GET_API_LIST from './src/components/GET_API_LIST';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <GET_API_LIST />
    </View>
  );
};

export default App;
