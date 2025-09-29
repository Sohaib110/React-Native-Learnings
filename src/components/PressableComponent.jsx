import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PressableComponent = () => {
  const handlePress = () => {
    alert('Button PressedOUT !');
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onLongPress={handlePress}
        delayLongPress={2000}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PressableComponent;
