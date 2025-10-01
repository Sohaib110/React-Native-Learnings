import { View, Text, Platform } from 'react-native';
import React from 'react';

const PlatformExample = () => {
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
        {Platform.OS === 'ios' ? 'iOS' : 'Android'} Platform User
      </Text>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
          marginTop: 10,
          textAlign: Platform.OS === 'ios' ? 'left' : 'right',
        }}
      >
        {`You are using a ${Platform.OS} device.`}
      </Text>
    </View>
  );
};

export default PlatformExample;
