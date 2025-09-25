import { View, Text, FlatList } from 'react-native';
import React from 'react';

const data = [
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Doe',
  },
  {
    id: '3',
    name: 'Jim Doe',
  },
  {
    id: '4',
    name: 'Jake Doe',
  },
  {
    id: '5',
    name: 'Jill Doe',
  },
  {
    id: '6',
    name: 'Joe Doe',
  },
  {
    id: '7',
    name: 'Jenny Doe',
  },
  {
    id: '8',
    name: 'Jack Doe',
  },
  {
    id: '9',
    name: 'Jerry Doe',
  },
  {
    id: '10',
    name: 'Jordan Doe',
  },
];

const FlatListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text style={{ fontSize: 18 }}>{item.name}</Text>
    </View>
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FlatListScreen;
