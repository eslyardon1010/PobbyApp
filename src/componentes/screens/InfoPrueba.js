import { Text, View,ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react';
import DrinkCard from '../CardDrink';
import { mostrarInfo } from '../../api';


const InfoDrinks = () => {
 const [drinks,  setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await mostrarInfo();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);
    return ( 
        <ScrollView>
        <Text>Pantalla de Informacion</Text>
        <DrinkCard info={drinks}/>
        </ScrollView>
     );
}
 
export default InfoDrinks;