import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, StatusBar, TouchableOpacity} from "react-native";
import {fetchDrinkChampagne} from '../../api/index'

import {CardCocktailList} from '../CardCocktailList';

 const Champagne = () => {
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        // justifyContent: 'center',
      },
});

export default Champagne