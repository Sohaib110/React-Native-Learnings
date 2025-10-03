import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import React from 'react';

const ImageExample = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/800/1200' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Hello, World!</Text>

        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.imageOne}
          resizeMode="cover"
        />

        <Image
          source={{ uri: 'https://picsum.photos/250' }}
          style={styles.imageTwo}
          resizeMode="cover"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  imageOne: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  imageTwo: {
    width: 150,
    height: 100,
    borderRadius: 12,
  },
});

export default ImageExample;
