import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PATCH_API = () => {
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
      const response = await axios.patch(
        `http://10.0.2.2:3000/users/${formData.id}`,
        {
          ...(formData.name && { name: formData.name }),
          ...(formData.email && { email: formData.email }),
        },
      );

      Alert.alert('Success', 'User updated successfully');
      setFormData({ id: '', name: '', email: '' });
      console.log(response.data);
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
        PATCH_API
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

export default PATCH_API;
