
import * as React from 'react';
import Home from './src/screens/home';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ header: () => null }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;