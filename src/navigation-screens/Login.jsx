import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <Button
        title="Login"
        // onPress={() =>
        //   navigation.navigate('About', { username: 'Sohaib', age: 22 })
        // }
        onPress={() => navigation.navigate('About', { username })}
      />
    </View>
  );
};

export default Login;
