import { View, Text, Button } from 'react-native';
import React from 'react';
// import First from './src/components/First';
import ContactListScreen from './src/screens/contact/ContactListScreen';

const App = () => {
  return (
    <View>
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
      <ContactListScreen />
    </View>
  );
};

export default App;
