
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Dimensions, ImageBackground} from "react-native";
import {mostrarInfo} from '../../api/index'
import { CardListInfo } from '../CardCocktailList'

/* EL METODO PARA CONSEGUIR LA INFORMACION DE CADA BEBIDA QUE PRESIONE 
SE LE ASIGNA UN IMAGE BACKGROUND PARA QUE TENGA UN FONDO, ESTE ESTA COLOCADO 
EN LA CARPETA DE ASSETS*/

 const InfoGeneral = ({navigation}) => {
const [drinks,  setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await mostrarInfo();
    setdrinks(response);
  };
  console.log(drinks);

  useEffect(() => {
    getdrinks();
  }, []);
//const Stack = createStackNavigator();
  return (
    <View style={styles.container}>

      <ScrollView>
            <ImageBackground
          source={require("../../../assets/2backgr.png")}
        style={styles.Image}
       />
<View>
  <>{drinks.drinks ? <CardListInfo cocktail={drinks} navigation={navigation} /> : null}</>
</View>
</ScrollView>
    </View>

  );


};


const {width, height} = Dimensions.get("screen");

const styles = StyleSheet.create({
  Image: {
    marginTop: 170,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width: 350,
    height: 480,
    position:"absolute",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000"
  },
})

export default InfoGeneral