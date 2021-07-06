import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, ImageBackground} from "react-native";
import {fetchDrinkRandom,fetchDrinkOrdinary,fetchDrinkNonAlcoholic,fetchDrinkCocktail,fetchDrinkPopular,fetchDrinkAlcoholic, fetchDrinkChampagne} from '../../api/index'

/*---------------------------------CARD PARA BOTONES DE CATEGORIAS-------------------------------------- */
import { CardCocktailList } from '../CardCocktailList';
import {CardListInfo} from '../CardCocktailList'
export const Alcoholic = ({navigation}) => {
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

export const Champagne = ({ navigation }) => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkChampagne();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

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

export const Cocktail = ({navigation}) => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkCocktail();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

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

export const NonAlcoholic = ({ navigation }) => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkNonAlcoholic();

    setdrinks(response);
  };
1
  useEffect(() => {
    getdrinks();
  }, []);

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
export const OrdinaryDrink = ({ navigation }) => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkOrdinary();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

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

export const Random = ({ navigation }) => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkRandom();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

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


export const Popular = ({ navigation }) => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinkPopular();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

  return (
    <View style={styles.containerP}>
      <ScrollView>
            <ImageBackground
          source={require("../../../assets/2backgr.png")}
        style={styles.Image}
       />
      <View>
        <>{drinks.drinks ? <CardCocktailList cocktail={drinks} navigation={navigation} /> : null}</>  
      </View>
      </ScrollView>
      </View>
  );

};




const styles = StyleSheet.create({
  containerP: {
     flex: 1,
    flexDirection: "column",
    backgroundColor: "#000"
  },
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
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        // justifyContent: 'center',
      },
});