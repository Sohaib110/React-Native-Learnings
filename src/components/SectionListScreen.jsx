import { View, Text, SectionList } from 'react-native';
import React from 'react';

const listItems = [
  {
    title: 'fruits',
    data: [
      { id: 1, name: 'Mango' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Orange' },
    ],
  },
  {
    title: 'vegetables',
    data: [
      { id: 1, name: 'Potato' },
      { id: 2, name: 'Tomato' },
      { id: 3, name: 'Cabbage' },
    ],
  },
];
const renderItem = ({ item }) => (
  <View>
    <Text>{item.name}</Text>
  </View>
);
const renderSectionHeader = ({ section }) => (
  <View>
    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{section.title}</Text>
  </View>
);

const SectionListScreen = () => {
  return (
    <View>
      <SectionList
        sections={listItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SectionListScreen;
