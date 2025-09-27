import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const ShowChild = () => {
  useEffect(() => {
    return () => {
      console.log('Component Unmounted');
    };
  }, []);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Child Component</Text>
    </View>
  );
};

export default ShowChild;    
