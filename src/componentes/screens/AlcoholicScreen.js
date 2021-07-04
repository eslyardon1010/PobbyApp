import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, StatusBar, TouchableOpacity} from "react-native";
import {fetchDrinkAlcoholic} from '../../api/index'

import {CardCocktailList} from '../CardCocktailList';

const Alcoholic = ({navigation}) => {
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        // justifyContent: 'center',
      },
});

export default Alcoholic