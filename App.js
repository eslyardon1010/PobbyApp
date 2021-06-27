import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/componentes/screens/Home'
import {myTabContainer} from './src/componentes/TabNavigation'
import {Image} from "react-native";
function LogoCocktail() {
  return (
    <Image
      style={{ width: 90, height: 90, alignSelf:'center', marginTop: 7}}
      source={require('./assets/logo.png')}
    />
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'black' } }}>
          <Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <LogoCocktail {...props} /> }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}