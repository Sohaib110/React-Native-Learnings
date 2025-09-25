import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../screens/contact/style';

const ContactItem = ({ name, email }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.emailText}>{email}</Text>
    </View>
  );
};

export default ContactItem;
