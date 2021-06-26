
import React from 'react';
//import Contador from './components/Contador'
//import Formulario from './components/Formulario'
import Nosotros  from './src/index'

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/componentes/screens/Home"


function App() {
    return ( 
      <div>
        <Nosotros />
      </div>
    );
}

export default App;
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>{
     <Stack.Screen name="Home" component={Home} />
      }</Stack.Navigator>
    </NavigationContainer>
  );
}

