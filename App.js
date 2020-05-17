
import * as React from 'react';
import Home from './src/screens/home';
import Ronald from './src/screens/ronald';
import Diogo from './src/screens/diogo';
import Soda from './src/screens/soda';
import Arreglo from './src/screens/arreglo';
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
        <Stack.Screen name="Soda" component={Soda} />
        <Stack.Screen name="Arreglo" component={Arreglo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;