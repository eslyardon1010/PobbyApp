import React from 'react';
import { NavigationContainer, Image } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/componentes/screens/Home'
import {Alcoholic, NonAlcoholic, OrdinaryDrink, Cocktail, Champagne, Random,Popular} from './src/componentes/screens/CatScreens'

import InfoGeneral  from './src/componentes/screens/Info';
import SearchResults from './src/componentes/screens/SearchResults';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alcoholic" component={Alcoholic} />
        <Stack.Screen name="NonAlcoholic" component={NonAlcoholic} />
        <Stack.Screen name="OrdinaryDrink" component={OrdinaryDrink} />
        <Stack.Screen name="Cocktail" component={Cocktail} />
        <Stack.Screen name="Champagne" component={Champagne} />
        <Stack.Screen name = "Random" component = {Random} />
        <Stack.Screen name="InformacionScreen" component={InfoGeneral} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="popular" component={Popular} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}