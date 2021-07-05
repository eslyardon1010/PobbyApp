import React from 'react';
import { NavigationContainer, Image } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/componentes/screens/Home'
//import Alcoholic from './src/componentes/screens/subScreens/Alcoholic'
//import NonAlcoholic from './src/componentes/screens/subScreens/NonAlcoholic'
import {Alcoholic, NonAlcoholic, OrdinaryDrink, Cocktail, Champagne, Random} from './src/componentes/screens/CatScreens'
import InfoDrinks from './src/componentes/screens/InfoPrueba';
import { AlcoholicInfo } from './src/componentes/screens/Info';

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alcoholic" component={Alcoholic} />
        <Stack.Screen name="NonAlcoholic" component={NonAlcoholic} />
        <Stack.Screen name="OrdinaryDrink" component={OrdinaryDrink} />
        <Stack.Screen name="Cocktail" component={Cocktail} />
        <Stack.Screen name="Champagne" component={Champagne} />
        <Stack.Screen name = "Random" component = {Random} />
        <Stack.Screen name="Informacion" component={InfoDrinks} />
        <Stack.Screen name="AlcoholicInfo" component={AlcoholicInfo} />     
      </Stack.Navigator>
      </NavigationContainer>
  );
}