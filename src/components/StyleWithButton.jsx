import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const StyleWithButton = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        Style With Button
      </Text>
      <Button title="Click Me" />
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Touchable Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor={'red'}
        style={styles.button}
        onPress={() => console.log('Touchable Highlight Pressed')}
      >
        <Text style={styles.buttonText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 15,
    margin: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default StyleWithButton;
