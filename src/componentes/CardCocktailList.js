import React from "react";
import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import { CardDrink, CardInformation} from "../componentes/CardCocktail";

export const CardCocktailList = ({ cocktail, navigation, index }) => {
  return (
 
     
    <View style={styles.container}>
      {cocktail.drinks.map((cock, index) => (
        <CardDrink key={index} cocktail={cock} navigation={navigation} />
      ))}
      </View>
  );
};
//{cocktail.drinks.map((cock, index) => (

 // ))}
export const CardListInfo = ({ drinks, cocktail, navigation }) => {
  return (
    <View style={styles.container}>
      <CardInformation key = {index} cocktail= {drinks} navigation= {navigation}/>
</View>
  );
}
//{cocktail.drinks.map((name, index) => (
//      ))}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

