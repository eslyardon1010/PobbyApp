
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, StatusBar, TouchableOpacity} from "react-native";
import {mostrarDrink, fetchDrinkNonAlcoholic,fetchDrinkOrdinary, fetchDrinkCocktail, fetchDrinkChampagne, drinkInfo, fetchDrinkAlcoholic} from '../../api/index'

import { CardListInfo } from '../CardCocktailList'

import {CardCocktailList} from '../CardCocktailList'
export const AlcoholicInfo = ({navigation, name}) => {
const [drinks,  setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkAlcoholic();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);
//const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
    <ScrollView>
        <View>
          <>{drinks.drinks ? <CardCocktailList cocktail={drinks} navigation={navigation} />  : null}</>
        </View>
      </ScrollView>
    </View>

  );


};

export const NonAlcoholic = () => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkNonAlcoholic();

    setdrinks(response);
  };
1
  useEffect(() => {
    getdrinks();
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView>
      <View>
          <>{drinks.drinks ? <CardInformation mostrar={drinks} /> : null}</>

      </View>
      </ScrollView>
      </View>
  );

};
export const OrdinaryDrink = () => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkOrdinary();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView>
      <View>
          <>{drinks.drinks ? <CardInformation mostrar={drinks} /> : null}</>
      </View>
      </ScrollView>
      </View>
  );

};

export const Cocktail = () => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkCocktail();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

  return (
    <View style={styles.container}>
   
    <ScrollView>
      <View>
      <>{drinks.drinks ? <CardInformation mostrar={drinks} /> : null}</>
      </View>
      </ScrollView>
      </View>
  );

};
export const Champagne = () => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkChampagne();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView>
      <View>
          <>{drinks.drinks ? <CardInformation mostrar={drinks} /> : null}</>
      </View>
      </ScrollView>
      </View>
  );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        // justifyContent: 'center',
      },
});

