import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import About from './src/navigation-screens/About';
import Home from './src/navigation-screens/Home';
import Login from './src/navigation-screens/Login';
import MyHeader from './src/navigation-screens/MyHeader';
import { Button, Alert } from 'react-native';
import Example from './src/navigation-screens/Example';

const Stack = createNativeStackNavigator();
const sayHello = () => {
  Alert.alert('Hello');
};
// const HeaderLeft = () => <Button title="One" onPress={sayHello} />;
// const HeaderRight = () => <Button title="Two" onPress={sayHello} />;
const MyExample = () => <Example />;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Header"
          component={MyHeader}
          options={{
            title: '',
            headerLeft: MyExample,
            // headerRight: HeaderRight,

            // headerLeft: () => <Button title="One" />,
            // headerRight: () => <Button title="Two" />,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
