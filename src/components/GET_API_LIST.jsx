import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const GET_API_LIST = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users').then(response => {
      setMyData(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: '10' }}>
          Users
        </Text>
        <FlatList
          data={myData}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  marginBottom: '10',
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  marginBottom: '10',
                }}
              >
                {item.email}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default GET_API_LIST;
