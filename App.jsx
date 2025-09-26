import { View, Text, Button } from 'react-native';
import React from 'react';
// import First from './src/components/First';
import Grid from './src/components/Grid';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 50,
        }}
      >
        App
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 50,
        }}
      >
        Muhammad Sohaib App Developer
      </Text>
      <Button title="Click Me" />
      <First /> */}
      <Grid />
    </View>
  );
};

export default App;
