import { View, Text, Button } from 'react-native';
import React from 'react';
import Loader from './src/components/Loader';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Loader />
    </View>
  );
};

export default App;
