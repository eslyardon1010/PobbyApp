import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { fetchPets } from "../../api";

const Home = ({ navigation }) => {
  const [pets, setPets] = useState({});

  const getPets = async () => {
    const response = await fetchPokemons();

    setPets(response);
  };

  useEffect(() => {
    getPets();
  }, []);

  return (
    <View>
      <CardList pets={pets} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;