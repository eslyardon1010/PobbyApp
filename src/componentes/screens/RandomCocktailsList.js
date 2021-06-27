import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./RandomCocktails";

const CardList = ({ randomR }) => {
  return (
    <View style={styles.container}>
      {randomR.drinks.map((random, index) => (
        <Card key={index} random={random} />
      ))}
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default CardList;