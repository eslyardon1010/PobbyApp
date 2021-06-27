import React from "react";
import {Image, StyleSheet, Text, View } from "react-native";

const Card = ({ random}) => {

  return (
      <View style={styles.container}>
      <Text style={styles.title}>{random.strDrink}</Text>
      <Text>{'\n'}Instrucciones{'\n'}{random.strInstructions}{'\n'}{'\n'}</Text>
      <Text> Categoria {'\n'}{random.strCategory}{'\n'}{'\n'}</Text>
      <View style={styles.image}>
        <Image style={styles.image} source={{ uri: random.strDrinkThumb }} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 0.5,
    borderColor: "#ffecb3",
    backgroundColor: "white",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  image: {
    width: 300,
    height: 300,
  }
});

export default Card;