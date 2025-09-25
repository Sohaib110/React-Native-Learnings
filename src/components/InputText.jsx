import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text style={{ fontSize: 30 }}>InputText</Text>
      <Text style={{ fontSize: 30 }}>InputText: {text}</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 2,
          borderColor: 'green',
          margin: 10,
        }}
        value={text}
        placeholder="Enter Your Name"
        onChangeText={value => setText(value)}
      />
      <Button title="Clear" onPress={() => setText('')} />
    </View>
  );
};

export default InputText;
