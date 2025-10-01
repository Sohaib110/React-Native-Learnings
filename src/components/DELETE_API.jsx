import { View, Text, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const DELETE_API = () => {
  const [id, setId] = useState('');
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);

      Alert.alert('User deleted successfully');
      console.log(response.data);
      setId('');
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to delete user');
    }
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
          marginTop: 40,
          textAlign: 'center',
        }}
      >
        DELETE_API
      </Text>
      <TextInput
        value={id}
        onChangeText={value => setId(value)}
        placeholder="Enter ID"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      />
      <Button title="Delete " onPress={handleDelete} />
    </View>
  );
};

export default DELETE_API;
