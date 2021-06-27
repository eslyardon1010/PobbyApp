import React from "react";
import {Image, StyleSheet, Text, View } from "react-native";
import {useFonts, Roboto_400Regular, Merriweather_400Regular, OpenSans_400Regular} from '@expo-google-fonts/dev'
 const Card = ({ random}) => {

   return (
      <View style={styles.container}>
      <Text style={styles.title}>{random.strDrink}</Text>
      <Text style={styles.texto}>{'\n'}Instrucciones{'\n'}{random.strInstructions}{'\n'}{'\n'}</Text>
      <Text style={styles.texto}> Categoria {'\n'}{random.strCategory}{'\n'}{'\n'}</Text>
      <View style={styles.image}>
        <Image style={styles.image} source={{ uri: random.strDrinkThumb }} />
      </View>
       </View>
  );
};


const styles = StyleSheet.create({
  texto: {
    fontSize: 12,
    fontFamily: OpenSans_400Regular,
    textAlign: 'justify',
  },
    image: {
    width: 200,
      height: 200,
      borderRadius: 15,
      alignSelf: 'center',
  },
  container: {
    padding: 20,
    margin: 0.5,
    borderColor: "#ffecb3",
    borderRadius: 24,
    backgroundColor: '#ffbdf3',
    marginTop: 10,
    flex: 1,
    width: 300,
    height: 300
  },
  title: {
    fontFamily: Merriweather_400Regular,
    fontSize: 20,
    color: 'blue',
    fontWeight: "bold",
    alignSelf: "center",
  }
});

export default Card