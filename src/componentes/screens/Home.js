import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View} from "react-native";
import CardList from "../../componentes/CardCocktailsList";
import {fetchDrinksLetter} from '../../api/index'

const Home = () => {
const [drinks, setdrinks] = useState({});

  const getdrinks = async () => {
    const response = await fetchDrinksLetter();

    setdrinks(response);
  };

  useEffect(() => {
    getdrinks();
  }, []);

  return (
    <ScrollView>
      <View>
        <>{drinks.drinks ? <CardList randomR={drinks} /> : null}</>
        <myTabContainer/>
      </View>
      </ScrollView>

  );

};

const styles = StyleSheet.create({});
export default Home;