import { View, Text, Button } from 'react-native';
import React from 'react';
import POST_API from './src/components/POST_API';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <POST_API />
    </View>
  );
};

export default App;
