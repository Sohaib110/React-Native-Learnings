import { View, Text, StyleSheet } from 'react-native';
import style from '../style/style';
import React from 'react';

const Styling = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          backgroundColor: 'red',
          color: 'white',
          marginTop: 20,
        }}
      >
        Inline Styling
      </Text>
      <Text style={styles.text}>Internal Styling</Text>
      <Text style={style.text}>External Styling</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: 'green',
    color: 'white',
    marginTop: 20,
  },
});

export default Styling;
