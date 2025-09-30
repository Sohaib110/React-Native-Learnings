import { View, Text, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const PUT_API = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });
  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://10.0.2.2:3000/users/${formData.id}`,
        { name: formData.name, email: formData.email },
      );
      Alert.alert('Success', 'User updated successfully');
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to update user');
      console.error(error);
    }
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          marginTop: 40,
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        PUT_API
      </Text>
      <TextInput
        value={formData.id}
        placeholder="Enter ID"
        onChangeText={value => handleInput('id', value)}
      />
      <TextInput
        value={formData.name}
        placeholder="Enter Name"
        onChangeText={value => handleInput('name', value)}
      />
      <TextInput
        value={formData.email}
        placeholder="Enter Email"
        onChangeText={value => handleInput('email', value)}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default PUT_API;
