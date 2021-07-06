import React from "react";
import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import { CardDrink, CardInformation, CardCharacteres} from "../componentes/CardCocktail";

export const CardCocktailList = ({ cocktail, navigation, index }) => {
  return (
    <View style={styles.container}>
      {cocktail.drinks.map((cock, index) => (
        <CardDrink key={index} cocktail={cock} navigation={navigation} />
      ))}
      </View>
  );
};

export const CardListInfo = ({ index, cocktail, navigation }) => {
  return (
    <View style={styles.container}>
    {cocktail.drinks.map((cock, index) => (
      <CardInformation key = {index} cocktail= {cock} navigation= {navigation}/>
    ))}
</View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

