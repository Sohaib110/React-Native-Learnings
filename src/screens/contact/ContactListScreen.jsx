import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { users } from './UserContactInfo';
import ContactItem from '../../components/ContactItem';
// Removed incomplete import statement

const ContactListScreen = () => {
  const renderItem = ({ item }) => (
    <ContactItem name={item.name} email={item.email} />
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ContactListScreen;
