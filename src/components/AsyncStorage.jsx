import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageDemo = () => {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('');

  const saveUsername = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      setStoredUsername(username);
      setUsername('');
      alert('✅ Username saved successfully!');
    } catch (error) {
      alert('❌ Failed to save username.');
    }
  };

  const getUsername = async () => {
    try {
      const stored = await AsyncStorage.getItem('username');
      if (stored) {
        setStoredUsername(stored);
        alert(`📦 Stored Username: ${stored}`);
      } else {
        alert('⚠️ No username found.');
      }
    } catch (error) {
      alert('❌ Failed to retrieve username.');
    }
  };

  const removeUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');
      setStoredUsername('');
      alert('🗑️ Username removed successfully!');
    } catch (error) {
      alert('❌ Failed to remove username.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AsyncStorage Example</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity style={styles.button} onPress={saveUsername}>
        <Text style={styles.buttonText}>💾 Save Username</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getUsername}>
        <Text style={styles.buttonText}>📂 Get Username</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRemove} onPress={removeUsername}>
        <Text style={styles.buttonText}>🗑️ Remove Username</Text>
      </TouchableOpacity>

      <Text style={styles.storedText}>
        Stored Username: {storedUsername || 'None'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  buttonRemove: {
    backgroundColor: '#E53935',
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  storedText: {
    marginTop: 20,
    fontSize: 18,
    color: '#444',
  },
});

export default AsyncStorageDemo;
