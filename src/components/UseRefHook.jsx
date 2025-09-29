import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useRef } from 'react';

const UseRefHook = () => {
  const myRef = useRef(null);
  const handleRef = () => {
    myRef.current.setNativeProps({
      text: 'Sohaib',
      style: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
      },
    });
    myRef.current.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={myRef}
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor={'red'}
      />
      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 30,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default UseRefHook;
