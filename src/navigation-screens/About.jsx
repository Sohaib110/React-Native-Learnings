import { View, Text, Button } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const About = props => {
  const insets = useSafeAreaInsets();
  // const { username, age } = props.route.params;
  const { username } = props.route.params;
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      {/* <Text>{username}</Text>
      <Text>{age}</Text> */}
      <Text>WelCome {username}</Text>
      <Button title="Go to Home" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default About;
