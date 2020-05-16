
import * as React from 'react';
import Home from './src/screens/home';
import Ronald from './src/screens/ronald';
import Diogo from './src/screens/diogo';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ header: () => null }} name="Home" component={Home} />
        <Stack.Screen name="Ronald" component={Ronald} />
        <Stack.Screen name="Diogo" component={Diogo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;