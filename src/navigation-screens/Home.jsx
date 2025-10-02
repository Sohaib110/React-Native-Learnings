import { View, Text, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default Home;
