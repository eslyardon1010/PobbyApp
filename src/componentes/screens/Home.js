import React from "react";
import { StyleSheet, Text, Image,  View, TouchableOpacity, ScrollView } from "react-native";
import BarraDeBusqueda from "../SearchDrink";



const Home = ({ navigation }) => {
  return (
    
                     //*-----------------BOTONES PARA CATEGORIAS------------
    <View style={styles.container}>
     <BarraDeBusqueda navigation={navigation}/>
      <View>
        <Text style={styles.Tittle}>¿What do you want to drink today? </Text>

          <TouchableOpacity onPress={() => { navigation.navigate("Alcoholic") }} style={styles.buttonAlcoholic}> 
            <Text style={styles.Text}>Alcoholic</Text>
             <Image
               style={styles.img}
      source={require('../../../src/img/alcoholicas.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("NonAlcoholic")}} style={styles.buttonNonAlcoholic}> 
            <Text style={styles.Text}>NoAlcoholic</Text>
            <Image
             style={styles.img}
      source={require('../../../src/img/NoAlcoholicas.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("OrdinaryDrink")}} style={styles.button_OrdinaryDrink}> 
            <Text style={styles.Text}>Ordinary</Text>
            <Image
              style={styles.img}
      source={require('../../../src/img/ordinary.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Cocktail")}} style={styles.button_Cocktail}> 
            <Text style={styles.Text}>Cocktail</Text>
            <Image
              style={styles.img}
      source={require('../../../src/img/cocktail.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Random")}} style={styles.button_Random}> 
            <Text style={styles.Text}>Random</Text>
            <Image
             style={styles.img}
      source={require('../../../src/img/ramdom.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Champagne")}} style={styles.button_Champagne}> 
            <Text style={styles.Text}>Champagne</Text>
            <Image
              style={styles.img}
      source={require('../../../src/img/champagne.jpg')} />
        </TouchableOpacity>
          <Text style={styles.txtT}>Pobby's Cocktail</Text>
        <Text style={styles.parrafo}>We offer a wide range of beverage recipes from various categories such as:
Alcoholicas, non-alcoholic, cocktails, champagne, ordinary and random drinks, as well as a more in-depth view of each specific drink
        </Text>
        <TouchableOpacity onPress={() => {navigation.navigate("popular")}} style={styles.button_Popular}> 
            <Text style={styles.txt}>Most popular drinks</Text>
        </TouchableOpacity>
      </View>
     
    </View>
    );  
};



const styles = StyleSheet.create({
  txtT: {
    marginTop: 50,
        fontSize: 20,
    color: '#ffe045',
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign:"center"
   
  },
  parrafo: {
    textAlign: "justify",
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    marginLeft: 28,
    marginRight: 20,
    fontStyle: "italic",
 
  },
  Tittle: {
    marginTop: 10,
    fontSize: 20,
    color: '#ffe045',
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign:"center"

  }, 
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 7,
    opacity: 0.7,
    borderRadius: 30
  },
 
  container: {
          position: 'relative',
          flex: 1,
          backgroundColor: '#6c5ce7',
          textAlign: 'center'
        },
  Text: {
    zIndex: 1,      
    color: '#fff',
    fontSize: 14,
    position: 'absolute',
    top: '103%',
    left: '19%',
    fontStyle: "italic",
    fontWeight: "bold"
         },
  buttonAlcoholic: {
    backgroundColor: '#000',
    position: 'relative',
          zIndex: 1,
          width: 105,
          height: 110,
          marginLeft: 20,
    marginTop: 16,
    borderRadius: 20,
          shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  
  buttonNonAlcoholic: {
    backgroundColor: '#000',
    position: 'relative',
          zIndex: 1,
          width: 110,
          height: 110,
    marginLeft: 20,
    marginTop: 25,
           borderRadius: 20,
          shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9, 
  }
  ,
  button_OrdinaryDrink: {
    backgroundColor: '#000',
         position : 'absolute',
          width: 105,
         height: 110,
    marginLeft: 280,
    marginTop: 186,
     borderRadius: 20,
          shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9, 
  },
  
  button_Cocktail: {
    backgroundColor: '#000',
          position: 'absolute',
          width: 110,
          height: 110,
          marginLeft: 280,
    marginTop: 52,
     borderRadius: 20,
          shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9, 
         },
  button_Random: {
    backgroundColor: '#000',
            position: 'absolute',
          width: 110,
            height: 110,
    marginLeft: 150,
    marginTop: 52,
     borderRadius: 20,
          shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9, 
         },
  button_Champagne: {
    backgroundColor: '#000',
            position: 'absolute',
          width: 110,
            height: 110,
    marginLeft: 150,
    marginTop: 186,
     borderRadius: 20,
          shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9, 
  },
  button_Popular:
  {
     backgroundColor: '#ffe045',
            position: 'absolute',
          width: 200,
            height: 40,
    marginLeft: 100,
    marginTop: 500,
     borderRadius: 20,
          shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9, 
  },
  txt: {
    color: '#000',
    marginTop: 7,
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center"
  }
       });
      
export default Home;