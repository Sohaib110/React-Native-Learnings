import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Charlie Davis' },
  ];

  const colors = ['#ff6f61', '#6a5acd', '#20b2aa', '#ffb400', '#ff69b4'];

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors[index % colors.length] }]}
      activeOpacity={0.8}
    >
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 My Contact List</Text>

      <TextInput
        placeholder="🔍 Search Contact..."
        placeholderTextColor="#eee"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />

      {filteredContacts.length === 0 ? (
        <Text style={styles.noResult}>❌ No contacts found</Text>
      ) : (
        <FlatList
          data={filteredContacts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // dark theme background
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 0,
    backgroundColor: '#1f1f1f',
    padding: 12,
    borderRadius: 25,
    marginBottom: 20,
    fontSize: 16,
    color: '#fff',
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 4,
  },
  card: {
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  noResult: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#bbb',
  },
});

export default Search;
