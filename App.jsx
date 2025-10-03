import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const Setting = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* SafeAreaView here ensures the top tab navigator sits below the status bar */}
        <SafeAreaView style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: { backgroundColor: '#f2f2f2', height: 60 },
              tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
              tabBarIndicatorStyle: { backgroundColor: '#f4511e', height: 3 },
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ tabBarLabel: '🏠 Home' }}
            />
            <Tab.Screen
              name="Settings"
              component={Setting}
              options={{ tabBarLabel: '⚙️ Settings' }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{ tabBarLabel: '👤 Profile' }}
            />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
