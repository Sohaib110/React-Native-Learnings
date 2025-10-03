import { View, Text } from 'react-native';
import React from 'react';

const About = props => {
  // const { username, age } = props.route.params;
  const { username } = props.route.params;
  return (
    <View>
      {/* <Text>{username}</Text>
      <Text>{age}</Text> */}
      <Text>WelCome {username}</Text>
    </View>
  );
};

export default About;
