
import React, { useEffect, useState } from "react";
import { ScrollView,SafeAreaView, StyleSheet, View, Text,Dimensions, ImageBackground} from "react-native";
import {mostrarDrink, fetchDrinkNonAlcoholic,fetchDrinkOrdinary, fetchDrinkCocktail, fetchDrinkChampagne, drinkInfo, fetchDrinkAlcoholic, mostrarInfo} from '../../api/index'
import { CardListInfo } from '../CardCocktailList'
import {CardCocktailList} from '../CardCocktailList'

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
        style={styles.bgImage}
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
  bgImage: {
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