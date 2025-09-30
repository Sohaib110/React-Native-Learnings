import { View, Text, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const POST_API = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });
  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/users', formData);
      Alert.alert('Success', 'Data submitted successfully');
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to submit data');
      console.error(error);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 10 }}>
        POST_API
      </Text>
      <TextInput
        formData={formData.id}
        placeholder="Enter ID"
        onChangeText={value => handleInput('id', value)}
      />
      <TextInput
        formData={formData.name}
        placeholder="Enter Name"
        onChangeText={value => handleInput('name', value)}
      />
      <TextInput
        formData={formData.email}
        placeholder="Enter Email"
        onChangeText={value => handleInput('email', value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default POST_API;
