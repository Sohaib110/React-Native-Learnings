import { View, Text, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('Muhammad Sohaib');
  return (
    <View>
      <Text style={{ fontSize: 30 }}>UseStateHook</Text>
      <Text style={{ fontSize: 30 }}>Name : {name}</Text>
      <Button title="Change Name" onPress={() => setName('Ali Raza')} />
    </View>
  );
};

export default UseStateHook;
