import React from "react";
import {Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, Card } from "react-native";
import { obtenerName } from "../api";
import * as Animatable from "react-native-animatable";


/*AQUI CONSEGUIMOS LA INFORMACION PARA LA PANTALLA DONDE SOLO SE MUESTRA LA FOTO Y EL NOMBRE. */
export const CardDrink = ({ navigation, cocktail }) => {
console.log(cocktail);
    return (

      <View style={styles.container}>
        <TouchableOpacity onPress={() => { navigation.navigate("InformacionScreen", obtenerName({ obtener: ( cocktail.strDrink)}))}}>
        <View style={styles.cardContainer}>
          <Image style={styles.imageStyle} source={{ uri: cocktail.strDrinkThumb }} />
            <View>
              <Text style={styles.titleStyle}>{cocktail.strDrink}</Text>
        </View>
          </View>
          </TouchableOpacity>
      </View>
  
  );
};

/*ESTE METODO NOS CONSIGUE TODA LA INFOORMACION QUE NOSOTROS NECESITAMOS DE NUESTRA API PARA MOSTRARLA EN PANTALLA*/
 
export const CardInformation = ({ cocktail }) => {
  return (
    
    <View style={styles.container}>
     
      <SafeAreaView>
      
       <View style={{ alignItems: "center" }}>
          <Animatable.View style={styles.card} animation="slideInDown" iterationCount={5} direction="alternate">
             <Image style={styles.imageCard} source={{ uri: cocktail.strDrinkThumb }} />
          </Animatable.View>
        </View>
      <View style={styles.cardText}> 
        <View>
          <Text style={styles.title}>{cocktail.strDrink}</Text>
            <Text style={styles.texto}>Category: {cocktail.strCategory}</Text>
             <Text style={styles.textoIngredient}>Ingredientes:</Text>
            <Text style={styles.textoIngredient}>{ cocktail.strMeasure1} {cocktail.strIngredient1}</Text>
            <Text style={styles.textoIngredient}>{ cocktail.strMeasure2}{cocktail.strIngredient2}</Text>
            <Text style={styles.textoIngredient}>{cocktail.strMeasure3}{cocktail.strIngredient3}</Text>
            <Text style={styles.textoIngredient}>{ cocktail.strMeasure4}{cocktail.strIngredient4}</Text>
            <Text style={styles.textoIngredient}>{ cocktail.strMeasure5}{cocktail.strIngredient5}</Text>
            <Text style={styles.textoInstrucciones}>Instructions: {cocktail.strInstructions}</Text>
        </View>
        </View>
      
   </SafeAreaView>
    </View>
    
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 15;
const radius = 30;


const styles = StyleSheet.create({
  textoIngredient: {
   color: '#fff',
    marginTop: 20,
    fontSize: 10,
    textAlign: "center",
    
    marginRight: 55,
    marginLeft: 15
  },

  textoInstrucciones: {
   color: '#fff',
    fontSize: 10,
    textAlign: "center",
    backgroundColor: 'red',
    borderRadius: 30,
    marginRight: 80, 
    marginTop: 14, 
    marginLeft: 5
  }
  ,
  title: {
    color: '#fff',
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    
  },

  imageCard: {
    height: 200,
    width: 200,
    borderRadius: 30,
    alignSelf: "center"
  },

  containerC: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#fff"
  },

  card: {
    height: 200,
    width: 200,
    margin: 5,
    borderRadius: 12,
    backgroundColor: "#000",
    justifyContent: "center",
    shadowColor: '#ffe045',
    shadowOffset: {
      width: 4,
      height: 4,
    },

    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9, 
  },

   actions: {
    alignContent: "center",
  },
   
  texto: {
    color: '#fff',
    marginTop: 20,
    fontSize: 14,
    textAlign: "center",
    
    margin: 1
  },

  container: {
    width: deviceWidth - 10,
    alignItems: "center",
    marginTop: 20,
  },
  
  labelStyle: {
    fontSize: 24,
    fontWeight: '700',
  },

  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor:'#000',
    height: 110,
    borderRadius: radius,
    shadowColor: '#ffe045',
    shadowOffset: {
      width: 10,
      height: 10,
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
    alignContent: "center",
    alignSelf: "center",
  },
  
  titleStyle: {
    zIndex: 1,
    fontSize: 14,
    textAlign: "center",
    marginTop: -58,
    marginLeft: 80,
    fontWeight: "normal",
    color: '#fff',
    
  }
});