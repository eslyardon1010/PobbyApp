import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, ImageBackground, View, TouchableOpacity } from "react-native";
import SearchDrink from '../SearchDrink'
import BarraDeBusqueda from "../SearchDrink";
const Home = ({ navigation }) => {

  return (
      
    <View style={styles.container}>
     <BarraDeBusqueda navigation={navigation}/>
        <View>
        
          <TouchableOpacity onPress={() => { navigation.navigate("Alcoholic") }} style={styles.buttonAlcoholic}> 
            <Text style={styles.Text}>Alcoholic</Text>
             <Image
              style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 7, opacity: 0.7}}
      source={require('../../../src/img/alcoholicas.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("NonAlcoholic")}} style={styles.buttonNonAlcoholic}> 
            <Text style={styles.Text}>NonAlcoholic</Text>
            <Image
              style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 7, opacity: 0.7 }}
      source={require('../../../src/img/NoAlcoholicas.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("OrdinaryDrink")}} style={styles.button_OrdinaryDrink}> 
            <Text style={styles.Text}>Ordinary Drink</Text>
            <Image
              style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 7, opacity: 0.7 }}
      source={require('../../../src/img/OrdinaryDrink.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Cocktail")}} style={styles.button_Cocktail}> 
            <Text style={styles.Text}>Cocktail</Text>
            <Image
              style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 7, opacity: 0.7 }}
      source={require('../../../src/img/cocktail.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Random")}} style={styles.button_Random}> 
            <Text style={styles.Text}>Random</Text>
            <Image
              style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 7, opacity: 0.7 }}
      source={require('../../../src/img/randomImage.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Champagne")}} style={styles.button_Champagne}> 
            <Text style={styles.Text}>Champagne</Text>
            <Image
              style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 7, opacity:0.7 }}
      source={require('../../../src/img/champagne.jpg')} />
        </TouchableOpacity>
          
    
      </View>
     
    </View>
    
    );  
};



const styles = StyleSheet.create({
  searchBar: {
    marginTop: 20,
    width: 300,
    height: 35,
    borderRadius: 30,
    marginLeft: 32
  },
  container: {
          position: 'relative',
          flex: 1,
          backgroundColor: '#6c5ce7',
          textAlign: 'center'
        },

  Text: {
    zIndex: 1,
    
        marginTop:30,      
        color: 'white',
    fontSize: 14,
    position: 'absolute',
    top: '50%',
    left: '50%',
       
         },
  buttonAlcoholic: {
    position: 'relative',
          zIndex: 1,
          width: 110,
          height: 110,
          marginLeft: 17,
    marginTop: 16,
          borderRadius: 100
          },
  buttonNonAlcoholic: {
    position: 'relative',
          zIndex: 1,
          width: 110,
          height: 110,
    marginLeft: 17,
          marginTop: .5
  }
  ,
  button_OrdinaryDrink: {
         position : 'absolute',
          width: 110,
         height: 110,
    marginLeft: 239,
    marginTop: 130
             },
  button_Cocktail: {
          position: 'absolute',
          width: 110,
          height: 110,
          marginLeft: 239,
    marginTop: 16,
         },
  button_Random: {
            position: 'absolute',
          width: 110,
            height: 110,
    marginLeft: 130,
    marginTop: 16
         },
  button_Champagne: {
            position: 'absolute',
          width: 110,
            height: 110,
    marginLeft: 130,
    marginTop: 130
  }
      
       });
      
export default Home;