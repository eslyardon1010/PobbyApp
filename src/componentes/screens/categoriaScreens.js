import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, StatusBar, TouchableOpacity} from "react-native";
import {fetchDrinkAlcoholic, fetchDrinkNonAlcoholic, fetchDrinkRandom, fetchDrinkOrdinary, fetchDrinkCocktail, fetchDrinkChampagne} from '../../api/index'

import {CardCocktailList} from '../CardCocktailList';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {CardDrink, click} from "../CardCocktail";


export const Alcoholic = ({navigation}) => {
const [drinks, setdrinks] = useState({});

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
          <>{drinks.drinks ? <CardCocktailList cocktail={drinks} navigation={navigation} /> : null}</>
           
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
        <>{drinks.drinks ? <CardCocktailList cocktail={drinks} /> : null}</>

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
        <>{drinks.drinks ? <CardCocktailList cocktail={drinks} /> : null}</>

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
        <>{drinks.drinks ? <CardCocktailList cocktail={drinks} /> : null}</>
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
        <>{drinks.drinks ? <CardCocktailList cocktail={drinks} /> : null}</>
         
      </View>
      </ScrollView>
      </View>
  );

};


export const Random = () => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkRandom();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView>
      <View>
        <>{drinks.drinks ? <CardCocktailList cocktail={drinks} /> : null}</>
         
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
