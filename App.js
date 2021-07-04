import React from 'react';
import { NavigationContainer, Image } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/componentes/screens/Home'
//import Alcoholic from './src/componentes/screens/subScreens/Alcoholic'
//import NonAlcoholic from './src/componentes/screens/subScreens/NonAlcoholic'
import{ AlcoholicInfo } from './src/componentes/screens/Info'
import AlcoholicScreen from './src/componentes/screens/AlcoholicScreen'
import NonAlcoholicScreen from './src/componentes/screens/NonAlcoholicScreen'
import ChampagneScreen from './src/componentes/screens/ChampagneScreen'
import RandomScreen from './src/componentes/screens/RandomScreen'
import CocktailScreen from './src/componentes/screens/CocktailsScreen'
import OrdinaryDrinkScreen from './src/componentes/screens/OrdinaryDrinkScreen'


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
         <Stack.Screen name="Alcoholic" component={AlcoholicScreen} />
         <Stack.Screen name="NonAlcoholic" component={NonAlcoholicScreen} />
        <Stack.Screen name="OrdinaryDrink" component={OrdinaryDrinkScreen} />
        <Stack.Screen name="Cocktail" component={CocktailScreen} />
        <Stack.Screen name="Champagne" component={ChampagneScreen} />
        <Stack.Screen name = "Random" component = {RandomScreen} />
        <Stack.Screen name="Informacion" component={AlcoholicInfo} />
        
      </Stack.Navigator>
      </NavigationContainer>
  );
}