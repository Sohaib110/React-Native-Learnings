import { View, Text, Button } from 'react-native';
import React from 'react';
import PATCH_API from './src/components/PATCH_API';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <PATCH_API />
    </View>
  );
};

export default App;
