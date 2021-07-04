import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, StatusBar, TouchableOpacity} from "react-native";
import {fetchDrinkNonAlcoholic} from '../../api/index'

import {CardCocktailList} from '../CardCocktailList';


const NonAlcoholic = () => {
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        // justifyContent: 'center',
      },
});

export default NonAlcoholic