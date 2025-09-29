import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const AlertExample = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>AlertExample</Text>
      <Button title="Click Me" onPress={showAlert} />
    </View>
  );
};

export default AlertExample;
