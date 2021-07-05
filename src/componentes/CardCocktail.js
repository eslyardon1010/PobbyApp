import React, {useEffect} from "react";
import {Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from "react-native";
import {obtenerName} from '../api/index'

export const CardDrink = ({ navigation, cocktail, index }) => {

    return (

      <View style={styles.container}>
        <TouchableOpacity onPress={() => { navigation.navigate("Informacion", obtenerName(obtener=index)) }}>
        <View style={styles.cardContainer}>
          <Image style={styles.imageStyle} source={{ uri: cocktail.strDrinkThumb }} />
            <View>
              <Text style={styles.titleStyle}>{cocktail.idDrink}</Text>
             <Text style={styles.titleStyle}>{cocktail.strDrink}</Text>
        </View>
          </View>
          </TouchableOpacity>
      </View>
  
  );
};

export const CardInformation = ({drinks, cocktail, navigation, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titleStyle}>{index=cocktail.idDrink}</Text>
          <Image style={styles.imageStyle} source={{ uri: cocktail.strDrinkThumb }} />
        <View>
          <Text style={styles.titleStyle}>{cocktail.strDrink}</Text>
           <Text style={styles.texto}>{cocktail.strCategory}</Text>
           <Text style={styles.texto}>{cocktail.strInstructions}</Text>
        </View>
          </View>
    </View>
    
  );
}






const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 15;
const radius = 30;


const styles = StyleSheet.create({


  card: {
    padding: 10,
    margin: 10,
  },
   actions: {
    alignContent: "center",
  },
  texto: {
    fontSize: 14,
    textAlign: 'justify',
  },
  container: {
    width: deviceWidth - 10,
    alignItems: 'center',
    marginTop: 20,
  }, 
  labelStyle: {
    fontSize: 24,
    fontWeight: '700',
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#000',
    height: 110
    ,
    borderRadius: radius,
    shadowColor: '#ffe045',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    marginLeft: -192,
    marginTop: 5,
    height: 100,
    width:100,
    borderRadius: 30,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    zIndex: 1,
    fontSize: 14,
    textAlign: 'center',
    marginTop: -58,
    marginLeft: 80,
    fontWeight: "normal",
    color: '#fff',
    
  }
});